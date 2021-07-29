import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slides = [
    {
      url: "https://via.placeholder.com/600/92c952"
    },
    {
      url: "https://via.placeholder.com/600/771796"
    },
    {
      url: "https://via.placeholder.com/600/24f355"
    },
    {
      url: "https://via.placeholder.com/600/d32776"
    },
  ]

  ngOnInit(): void {
    this.textTyping()
  }

  textTyping() {

  }

}
