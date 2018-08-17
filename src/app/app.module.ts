import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms'
import { ApiService } from './api.service';
import { PostComponentComponent } from './post-component/post-component.component';
import { CommentComponent } from './comment/comment.component';
import { EditPostComponent } from './post-component/edit-post/edit-post.component';

@NgModule({
  declarations: [AppComponent, PostComponentComponent, CommentComponent, EditPostComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
