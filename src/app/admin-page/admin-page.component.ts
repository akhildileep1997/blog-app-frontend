import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  error: string = '';
  allBlogs: any = [];

  constructor(private api: ApiService, private route: Router) {}
  ngOnInit(): void {
    this.blogToAdminPage();
  }

  // displaying rejected blog to admin account
  blogToAdminPage() {
    this.api.blogToAdminPage().subscribe((data: any) => {
      console.log(data);
      console.log(data.blog);
      this.allBlogs = data.blog;
    });
  }

  // approving the blog by admin
  addDashboardBlog(_id: any) {
    this.api.addDashboardBlog(_id).subscribe(
      (data: any) => {
        alert('blog added successfully to dashboard');
        window.location.reload()
      },
      (data: any) => {
        alert(data.error.message);
      }
    );
  }


  //logout button
  logOut() {
    localStorage.clear();
    this.route.navigateByUrl('/loginPage');
  }
}
