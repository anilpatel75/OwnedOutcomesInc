import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editForm: FormGroup;
  patient= false;
  constructor() { }

  ngOnInit() {
    
  }
  initForm()
  {
    this.editForm = new FormGroup({
       'postId': new FormControl(),
       'postTitle':new FormControl(),
       'postAuthor': new FormControl()
      })
    }
  
  onselected()
  {
   
  console.log(this.editForm.value)
  }

}
