import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  AllUsers:any=[]
constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getAllUsers().subscribe((data:any)=>{
      console.log(data.users);
      this.AllUsers=data.users
    })
  }
}
