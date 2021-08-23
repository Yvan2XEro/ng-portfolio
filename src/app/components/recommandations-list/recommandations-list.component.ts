import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-recommandations-list',
  templateUrl: './recommandations-list.component.html',
  styleUrls: ['./recommandations-list.component.scss']
})
export class RecommandationsListComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
  }

}
