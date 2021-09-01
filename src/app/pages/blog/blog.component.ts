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
  selectedCategorie = ''
  ngOnInit(): void {
    this.app.setTitle('Blog');
    this.postService.getAllArticles()
    .subscribe(articles => {
      this.articles = articles
    })
  }
  filterArticles() {
    return this.articles.filter(article => article.category.includes(this.selectedCategorie))
  }

  substringArticleText(text: string) {
    if(text.length>240) {
      return text.substring(0, 240) +'...'
    }
    return text;
  }

}
