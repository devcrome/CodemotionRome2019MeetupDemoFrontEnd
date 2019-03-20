import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {BlogPost} from '../blog-post/blog.post.model';
import {tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) {}

  blogPost$: Subject<BlogPost[]> = new Subject();

  create(title: string, content: string) {
    return this.http.post(environment.endpoint, {title, content, date: new Date()});
  }

  getList(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(environment.endpoint)
      .pipe(
        tap(list => this.blogPost$.next(list))
      );
  }
}
