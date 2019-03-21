import {Component, OnInit} from '@angular/core';
import {BlogPost} from './blog-post/blog.post.model';
import {concatMap} from 'rxjs/operators';
import {BlogService} from './services/blog.service';

@Component({
  selector: 'fm-root',
  template: `
    <div class="container">
      <h1>Blog Post v 1.0.0</h1>
      <fm-form (onSubmit)="savePost($event)"></fm-form>
      <fm-list [posts]="blogService.blogPost$ | async"></fm-list>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public blogService: BlogService
  ) {}

  ngOnInit() {
    this.blogService.getList().subscribe();
  }

  savePost(post: BlogPost) {
    this.blogService.create(post.title, post.content)
      .pipe(
        concatMap(res => this.blogService.getList())
      ).subscribe(res => console.log(res));
  }
}
