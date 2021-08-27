import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { InputRatingModaleComponent } from '../input-rating-modale/input-rating-modale.component';
import { PostService } from '../../shared/services/post.service';
@Component({
  selector: 'app-recommandations-list',
  templateUrl: './recommandations-list.component.html',
  styleUrls: ['./recommandations-list.component.scss']
})
export class RecommandationsListComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private postService: PostService
  ) { }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<strong class="slider-button">&#8249</strong>', '<strong class="slider-button">&#8250;</strong>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  recommandations: any[] = []
  ngOnInit(): void {
    this.postService.getAllRecommandations()
    .subscribe(recommandations =>{
      this.recommandations = recommandations
    })
  }

  openRatingModale() {
    this.matDialog.open(InputRatingModaleComponent, {autoFocus: false})
    .afterClosed().subscribe(()=>{
      this.ngOnInit()
    })
  }

}
