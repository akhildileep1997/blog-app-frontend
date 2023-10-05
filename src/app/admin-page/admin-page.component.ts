import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  error:string=''
  allBlogs:any=[]

  constructor(private api:ApiService,private route:Router){}
  ngOnInit(): void {
   this.blogToAdminPage()
  }

  /////////////////////blog for displaying to admin account
  blogToAdminPage(){
    this.api.blogToAdminPage().subscribe((data:any)=>{
      console.log(data);
      console.log(data.response);
      this.allBlogs=data.response
      
    })
  }
  
//logout button
logOut(){
  localStorage.clear();
  this.route.navigateByUrl('/loginPage')
}



/////////////////// approving the blog
addDashboardBlog(blogId:any,title:any,subTitle:any,content:any,imageUrl:any,UserId:any){
this.api.addDashboardBlog(blogId,title,subTitle,content,imageUrl,UserId).subscribe((data:any)=>{
  alert("blog added successfully to dashboard") 
},(data:any)=>{
 alert(data.error.message)
})
}


removeBlog(id:any){
  this.api.removeBlog(id).subscribe((data:any)=>{
    console.log(data); 
    this.blogToAdminPage()
    alert("Blog Removed")
  })
}
}
