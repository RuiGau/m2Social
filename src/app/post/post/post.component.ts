import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {UserService} from '../user.service';
import {User} from './user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  user: User;

  constructor(private service: PostService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.switchMap(
      (params: ParamMap) => {
        if (params.has('id')) {
          return this.service.get(+params.get('id'));
        }else {
          return Observable.of(this.post);
        }
      }
    ).subscribe(post => {
        this.post = post;
        this.userService.get(post.userId).subscribe(
          user => this.user = user
        );
      }
    );
  }

}
