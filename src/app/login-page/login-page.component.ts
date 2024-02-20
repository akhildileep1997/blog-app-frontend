import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  // variable to hold success
  loginSuccess:boolean=false;
  // variable to hold error
  loginError:string=''
constructor(private fb:FormBuilder,private api:ApiService,private loginRoute:Router){}
loginForm = this.fb.group({
  userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@#$%&*]*')]],
})
login(){
  if(this.loginForm.valid)
  {
    let userId = this.loginForm.value.userId;
    let password = this.loginForm.value.password;
    console.log(userId,password);
    this.api.login(userId,password).subscribe((response:any)=>{
      console.log(response);
      console.log(response.user.userName);
      console.log(response.user.userId);
       //setting user to local storage
      localStorage.setItem('user', response.user.userName)
      console.log('user is',response.user.userName);

      localStorage.setItem('id', response.user.userId)
       console.log('user id is',response.userId);
      this.loginSuccess=true
      if(userId == '123456')
      {
        setTimeout(() => {
          this.loginRoute.navigateByUrl('/adminPage')
        },2000);
      }
     else{
      setTimeout(() => {
        this.loginRoute.navigateByUrl('/dashboard')
      },2000);
     }
    },(response:any)=>{
      this.loginError=response.error.message
    })
      setTimeout(() => {
        this.loginForm.reset();
        this.loginError=''
      }, 3000);
  }else{
    alert("invalid User Id or Password entered")
  }
}
}
