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
      url: "./../../assets/img/aplication-mobile-smartphone.jpg",
      text: "des application mobiles"
    },
    {
      url: "./../../assets/img/application_internet.jpg",
      text: "des apllications web"
    },
    {
      url: "./../../assets/img/AdobeStock.jpeg",
      text: "des logiciels d'automatisation"
    },
  ]

  ngOnInit(): void {

  }
  private textTyping() {
  }

}
