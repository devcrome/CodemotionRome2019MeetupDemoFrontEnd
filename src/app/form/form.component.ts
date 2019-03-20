import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BlogPost} from '../blog-post/blog.post.model';

@Component({
  selector: 'fm-form',
  template: `
    <form (ngSubmit)="onSubmit.emit({title: form.value.title, content: form.value.content})" #form="ngForm" style="margin-bottom: 20px">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" name="title" placeholder="Insert title.." ngModel>
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea class="form-control" id="content" name="content" placeholder="Insert content.." rows="3" ngModel></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="margin-right: 5px">Submit</button>
    </form>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  @Output() onSubmit: EventEmitter<Partial<BlogPost>> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
}
