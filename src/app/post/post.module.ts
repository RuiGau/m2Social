import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostRootComponent } from './post-root/post-root.component';
import {RouterModule, Routes} from '@angular/router';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './post.service';
import {UserService} from './user.service';

const routes: Routes = [
  {
    path: 'post', component: PostRootComponent,
    children: [
      {
        path: ':id', component: PostComponent
      },
      {
        path: '', component: PostListComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [PostService, UserService],
  declarations: [PostListComponent, PostRootComponent, PostComponent]
})
export class PostModule { }
