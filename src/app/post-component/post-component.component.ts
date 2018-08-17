import { Post, ApiService } from './../api.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
 @Input() postData:Post[];
 @Output() sendingPostData = new EventEmitter<number>();
 editMode:boolean = false;
  
  constructor(private service:ApiService) { }

  ngOnInit() {
       
  }
  OnClickToPOst(Index:any)
  {
    this.editMode = false
   this.sendingPostData.emit(Index);
  }
  onButtonClicked()
  {
   this.editMode = true;
  }


}
