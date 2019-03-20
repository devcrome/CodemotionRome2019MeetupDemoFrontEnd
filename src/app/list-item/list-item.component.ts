import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from '../blog-post/blog.post.model';

@Component({
  selector: 'fm-list-item',
  template: `    
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">
            {{item.content}}
          </p>
        </div>
      </div>
  `,
  styles: []
})
export class ListItemComponent implements OnInit {

  @Input() item: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
