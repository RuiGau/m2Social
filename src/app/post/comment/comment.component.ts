import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Comment} from '../post/comment';
import {User} from '../post/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.get(this.comment.userId).subscribe((user: User) => this.user = user);
  }

}
