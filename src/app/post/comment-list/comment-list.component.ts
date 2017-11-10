import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Post} from '../post/post';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() post: Post;
  comments: Comment[];
  constructor(private service: CommentService) { }

  ngOnInit() {
    this.service.getCommentsOfAPost(this.post.id).subscribe(comments => this.comments = comments);
  }

}
