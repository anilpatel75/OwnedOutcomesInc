
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';



const BASE_URL = '/api';
const user = 'John';
 

export interface Post {
  id: number;
  title: string;
  author: string;
}
export interface Comment {
  id: number;
  body: string;
  postId: number;
}

@Injectable()
export class ApiService {
  sendDataToService:number;
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>(`${BASE_URL}/posts?author=${user}`);
  }

  getComment() {
     
   return this.http.get<Comment[]>(`${BASE_URL}/comments?postId=${this.sendDataToService}`);
   
  }
}
