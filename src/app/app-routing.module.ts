import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FeedBacksComponent } from './feed-backs/feed-backs.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'loginPage',component:LoginPageComponent
  },
  {
    path:'registerPage',component:RegisterPageComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'account',component:AccountComponent
  },
  {
    path:'addBlog',component:AddBlogComponent
  },
  {
    path:'adminPage',component:AdminPageComponent
  },
  {
    path:'feed-backs',component:FeedBacksComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
