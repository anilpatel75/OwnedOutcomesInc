import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   @Input() clickComment;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
  console.log(this.clickComment)

  }

}
