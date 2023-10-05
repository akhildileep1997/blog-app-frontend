import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private route:Router,private api:ApiService){}

  allBlogs:any=[]
  user:string=''
  id:string=''

  //logout
  logOutStatus:boolean=false;
 



ngOnInit(): void {
 
  if(localStorage.getItem('id'))
  {
    this.id=localStorage.getItem('id')||''
    
  }
  
  if(localStorage.getItem('user'))
  { 
    this.user=localStorage.getItem('user')||''
  }
  if(!localStorage.getItem('id'))
  {
    alert("please login")
    this.route.navigateByUrl('/loginPage')
  }

  

  this.getBlog()
  
}

//logout button
logOut(){
  localStorage.clear();
  this.logOutStatus=true
  setTimeout(() => {
    this.route.navigateByUrl('/loginPage')
  },2000);
}
//displaying all blogs
getBlog(){
  this.api.displayBlog(this.id).subscribe((response:any)=>{
  console.log(response.result);
   this.allBlogs=response.result

  },(response:any)=>{
    console.log(response);    
    
  })

}

//removing blog
delete(_id:any){
  this.api.deleteBlog(_id).subscribe((result:any)=>{
   alert(result.message) 
   this.getBlog()
  })

}




}                          
