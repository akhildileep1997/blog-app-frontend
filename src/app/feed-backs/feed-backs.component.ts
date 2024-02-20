import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-feed-backs',
  templateUrl: './feed-backs.component.html',
  styleUrls: ['./feed-backs.component.css']
})
export class FeedBacksComponent implements OnInit {
constructor(private api:ApiService){}
messages:any=[]
  ngOnInit(): void {
    this.api.getFeeBacks().subscribe((response:any)=>{
      console.log(response.feedback);
      this.messages=response.feedback
    })
  }

}
