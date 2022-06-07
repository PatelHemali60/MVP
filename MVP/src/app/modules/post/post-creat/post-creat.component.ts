import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-creat',
  templateUrl: './post-creat.component.html',
  styleUrls: ['./post-creat.component.scss']
})
export class PostCreatComponent implements OnInit {
  
  post:Post; 

  //OUTPUT for send data child to perent
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {
    //intialize post
    this.post = {} as Post;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddPost(){
    const post = {
      title: this.post.title,
      content: this.post.content
    }
    // this.postCreated.emit(post);
  }

}
