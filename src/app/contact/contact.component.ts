import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}
 contactForm = this.fb.group({
  name:['',[Validators.required,Validators.pattern('[a-zA-z ]*')]],
  mail:['',[Validators.required,Validators.email]],
  feedback:['',[Validators.required]]
 })
 contact(){
if(this.contactForm.valid){
  let name=this.contactForm.value.name;
  let mail=this.contactForm.value.mail;
  let feedback = this.contactForm.value.feedback
  console.log(name,mail,feedback);
  this.api.feedback(name,mail,feedback).subscribe((response:any)=>{
   console.log(response);
    alert("response sended successfully")
    setTimeout(()=>{
      this.contactForm.reset();
    },2000)
  })
}else{
  alert("please fill the form")
}
 }
}
