import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogPost} from '../blog-post/blog.post.model';

@Component({
  selector: 'fm-list',
  template: `    
    <div *ngFor="let blogPost of posts" style="margin-bottom: 5px">
      <fm-list-item [item]="blogPost"></fm-list-item>
    </div>
  `,
  styles: []
})
export class ListComponent implements OnInit {
N
  @Input() posts: BlogPost[];

  constructor() {}

  ngOnInit() {
  }
}
