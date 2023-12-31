import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit{
  //login success
 blogAddeduccess:boolean=false;
  idError:string=''
  // hor holding id
  id:string=''
  //success
blogSucces:string=''
// error
blogError:string=''
constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}
  ngOnInit(): void {
  if(localStorage.getItem('id'))
  {
   this.id =localStorage.getItem('id')||''
  }
  }


blogForm = this.fb.group({
  blogId:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
title:['',[Validators.required,Validators.pattern('[a-zA-Z0-9. ]*')]],
  subTitle:['',[Validators.required,Validators.pattern('[a-zA-Z0-9. ]*')]],
  content:['',[Validators.required]],
  imageUrl:['',[Validators.required]],
  UserId:['',[Validators.required,Validators.pattern('[0-9 ]*')]]
})
//function for adding blog
addBlog(){
  if(this.blogForm.valid){
    let blogId =this.blogForm.value.blogId
    let title = this.blogForm.value.title
    let subTitle=this.blogForm.value.subTitle
    let content = this.blogForm.value.content
    let imageUrl = this.blogForm.value.imageUrl   
    let UserId = this.blogForm.value.UserId                                 
    if(this.id==UserId){
    this.api.addBlog(blogId,title,subTitle,content,imageUrl,UserId).subscribe((response:any)=>{
      this. blogAddeduccess=true
    setTimeout(() => {
      if(this.id=='123456')
      {
          this.route.navigateByUrl('/adminPage')
      }else{
        this.route.navigateByUrl('/account')
      }
    },3000);
  },(response:any)=>{
    this.blogError=response.error.message
  })
}else{
  alert("invalid login")
}
setTimeout(() => {
  this.blogForm.reset();
  this.blogError=''
  this.blogSucces=''
},3000);
  }
}
}
  
  
