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
      console.log(response.user);
      console.log(response.id);
       //setting user to local storage
      localStorage.setItem('user',response.user)
      localStorage.setItem('id',response.userId)
      localStorage.setItem('token',response.token)
      this.loginSuccess=true
      if(userId == '123456' && password =='Admin@12345')
      {
        setTimeout(() => {
          this.loginRoute.navigateByUrl('/adminPage')
        },3000);
      }
     else{
      setTimeout(() => {
        this.loginRoute.navigateByUrl('/dashboard')
      },3000);
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
