import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  //variable to hold error
  registerError:string=''
  // variable to hold success
  registerSuccess:string=''
constructor(private fb:FormBuilder,private api:ApiService,private registerRoute:Router){}
registerForm = this.fb.group({
  userName:['',[Validators.required,Validators.pattern('[a-zA-z1-9 ]*')]],
  userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.minLength((6)),Validators.pattern('[a-zA-Z0-9@#$%&*]*')]],
  confirmPassword:[''],
})

register(){
  if(this.registerForm.valid)
  {
    let userName = this.registerForm.value.userName
    let userId = this.registerForm.value.userId
    let password = this.registerForm.value.password
    let confirmPassword = this.registerForm.value.confirmPassword
    console.log(userName,userId,password,confirmPassword);
    this.api.register(userName,userId,password).subscribe((response:any)=>{
      console.log(response);
      this.registerSuccess=response.message
      setTimeout(()=>{
        this.registerRoute.navigateByUrl('/loginPage')
      },3000)
    },(response:any)=>{
     this.registerError=response.error.message
    })
    setTimeout(() => {
      this.registerError='';
      this.registerForm.reset();
    }, 3000);

  }else{
    alert('invalid form')
  }
}


}
