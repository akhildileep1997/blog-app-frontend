import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  searchKey:string=''
  allBlogs:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.displayAllBlog().subscribe((result:any)=>{
      console.log(result);
      console.log(result.blog);
      this.allBlogs=result.blog
  })
}
search(event:any){
  console.log(event.target.value);

  this.searchKey=event.target.value
}

}
