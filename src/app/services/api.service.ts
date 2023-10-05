import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options = {
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  Base_url:any='http://localhost:5000'
  //api for register
  register(userName:any,userId:any,password:any){
    const body = {
      userName,
      userId,
      password
    }
    return this.http.post(`${this.Base_url}/register`,body)
  }
  // api for login
  login(userId:any,password:any){
    const body = {
      userId,
      password
    }
  return this.http.post(`${this.Base_url}/login`,body)
  }

  // append token to the header
  appendToken(){
    // get token from localStorage
   let token = localStorage.getItem('token')
   // create httpHeader
   let headers = new HttpHeaders()

   if(token){
    headers = headers.append('verify-token',token)
    options.headers=headers
   }
   return options
  }

  //api for addBlog
  addBlog(blogId:any,title:any,subTitle:any,content:any,imageUrl:any,UserId:any){
    const body ={
      blogId,
      title,
      subTitle,
      content,
      imageUrl,
      UserId
    }
   return this.http.post(`${this.Base_url}/addBlog`,body,this.appendToken())
  }

  ///////////////////////////////////////////////////////////
  addDashboardBlog(blogId:any,title:any,subTitle:any,content:any,imageUrl:any,UserId:any){
   const body ={
    blogId,title,subTitle,content,imageUrl,UserId
   }
   return this.http.post(`${this.Base_url}/add-dashboard-blog`,body,this.appendToken())
  }

  // api for fetching blog
displayAllBlog(){
  return this.http.get(`${this.Base_url}/displayAllBlog`,this.appendToken())
}

//api for fetching blogs to admin account 
blogToAdminPage(){
  return this.http.get(`${this.Base_url}/display-blog`,this.appendToken())
}

/////////////////////// api for displaying blog in user account
displayBlog(id:any){
 return this.http.get(`${this.Base_url}/displayBlog/`+id,this.appendToken())
}

//////display users
getAllUsers(){
  return this.http.get(`${this.Base_url}/users`,this.appendToken())
}

// api for removing blog from admin page
removeBlog(blogId:any){
  return this.http.delete(`${this.Base_url}/removeBlog/`+blogId,this.appendToken())
}

////////////////////////////api for removing blog from user part
deleteBlog(_id:any){
  return this.http.delete(`${this.Base_url}/remove-blog/`+_id,this.appendToken())
}


// api for adding feedback
feedback(name:any,mail:any,feedback:any){
  const body = {
    name,
    mail,
    feedback
  }
  return this.http.post(`${this.Base_url}/feedback`,body,this.appendToken())
}

//display messages
viewMessage()
  {
    return this.http.get(`${this.Base_url}/message`,this.appendToken())
  }


   }


