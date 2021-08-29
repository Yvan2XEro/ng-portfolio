import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private app: AppComponent,
    private postService: PostService
  ) { }

  articles: any[] = []

  ngOnInit(): void {
    this.app.setTitle('Blog');
    this.postService.getAllArticles()
    .subscribe(articles => this.articles = articles)
  }

}
