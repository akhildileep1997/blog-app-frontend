import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  Base_url: any = 'http://localhost:5000';
  //api for register
  register(userName: any, userId: any, password: any) {
    const body = {
      userName,
      userId,
      password,
    };
    return this.http.post(`${this.Base_url}/user/register`, body);
  }
  // api for login
  login(userId: any, password: any) {
    const body = {
      userId,
      password,
    };
    return this.http.post(`${this.Base_url}/user/login`, body);
  }

  //api for addBlog
  addBlog(title: any, subTitle: any, content: any, imageUrl: any, userId: any) {
    const body = {
      title,
      subTitle,
      content,
      imageUrl,
      userId,
    };
    return this.http.post(`${this.Base_url}/blog/add-blog`, body);
  }

  //api for fetching blogs to admin account
  blogToAdminPage() {
    return this.http.get(`${this.Base_url}/blog/blog-to-admin-page`);
  }

  // approving blog by admin
  addDashboardBlog(_id: any) {
    const body = {
      isAdminApproved: 'Approved',
    };
    return this.http.post(`${this.Base_url}/blog/approve-blog/${_id}`, body);
  }

  // api for fetching admin approved blog to dashboard
  displayAllBlog() {
    return this.http.get(`${this.Base_url}/blog/dashboard-blogs`);
  }

  // api for displaying blog in user account
  displayBlog(id: any) {
    return this.http.get(`${this.Base_url}/blog/user/user-added-blogs/${id}`);
  }

  //api for removing blog from user part
  deleteBlog(_id: any) {
    return this.http.delete(`${this.Base_url}/blog/delete-blog/${_id}`);
  }

  // api for adding feedback
  feedback(name: any, email: any, response: any) {
    const body = {
      name,
      email,
      response,
    };
    return this.http.post(`${this.Base_url}/user/feed-back`, body);
  }

  //display messages
  getFeeBacks() {
    return this.http.get(`${this.Base_url}/user/all-feedback-responses`);
  }

//display users
  getAllUsers() {
    return this.http.get(`${this.Base_url}/user/all-registered-users`);
  }

  //deleteAccount
  deleteAccount() {
    return this.http.delete(`${this.Base_url}/delete-account/`);
  }
}


