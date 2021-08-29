import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../shared/interfaces/Post';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.scss']
})
export class ShowArticleComponent implements OnInit {

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  private slug = ''
  article: Post | undefined = {
    title: '',
    text: '',
    category: '',
    createdAt: new Date(),
    author: '',
    editedAt: new Date(),
    image: '',
  }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.postService.retrieveArticleBySlug(params.slug)
      .subscribe(data =>{
        this.article = data.data()
        if(data.data()==undefined)
          this.router.navigate(['not-found'])
      })
    })
  }

}
