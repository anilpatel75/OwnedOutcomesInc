import { Component, OnInit, EventEmitter,Output,SimpleChanges,OnChanges } from '@angular/core';

import { ApiService, Post, Comment } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'Recruitment';
  dataIsAvailable: boolean;
  sendDataToService = new EventEmitter<any>()
  posts: Post[];
  commentOfPost:Comment[];
  clicked:boolean = false;

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
   
  }
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  onsending(index)
  {  
    console.log(index)
    this.clicked= true;
    this.apiService.sendDataToService = index;
    this.apiService.getComment().subscribe((commentData)=>
    {
      this.commentOfPost = commentData
     
    })
   
   
}
}
