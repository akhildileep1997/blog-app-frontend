import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  Base_url: any = 'http://localhost:5000';

  token = localStorage.getItem('token');

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
   private user: string | null = localStorage.getItem('id');
  addBlog(title: any, subTitle: any, content: any, imageUrl: any) {
    const body = {
      title,
      subTitle,
      content,
      imageUrl,
      user:this.user
    };
    return this.http.post(`${this.Base_url}/blog/add-blog`, body, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  //api for fetching blogs to admin account
  blogToAdminPage() {
    return this.http.get(`${this.Base_url}/blog/blog-to-admin-page`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  // approving blog by admin

  addDashboardBlog(_id:any) {
    const body = {
      isAdminApproved: 'Approved',
    };
    return this.http.post(`${this.Base_url}/blog/approve-blog/${_id}`, body, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  // api for fetching admin approved blog to dashboard
  displayAllBlog() {
    return this.http.get(`${this.Base_url}/blog/dashboard-blogs`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  // api for displaying blog in user account
  id = localStorage.getItem('id')
  displayBlog() {
    return this.http.get(`${this.Base_url}/blog/user/user-added-blogs/${this.id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  //api for removing blog from user part
  deleteBlog(_id: any) {
    return this.http.delete(`${this.Base_url}/blog/delete-blog/${_id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  // api for adding feedback
  feedback(name: any, email: any, response: any) {
    const body = {
      name,
      email,
      response,
    };
    return this.http.post(`${this.Base_url}/user/feed-back`, body, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  //display messages
  getFeeBacks() {
    return this.http.get(`${this.Base_url}/user/all-feedback-responses`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  //display users
  getAllUsers() {
    return this.http.get(`${this.Base_url}/user/all-registered-users`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  //deleteAccount
  deleteAccount(_id: any) {
    return this.http.delete(`${this.Base_url}/user/delete/${_id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}


