import { CarouselService } from './../../shared/services/carousel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  openingDEV = "<DEV>"
  endingDEV = "</DEV>"
  constructor(
    public carousel: CarouselService
  ) { }

  slides = [
    {
      url: "./../../assets/img/aplication-mobile-smartphone.jpg",
      text: "applications mobiles"
    },
    {
      url: "./../../assets/img/application_internet.jpg",
      text: "apllications web"
    },
    {
      url: "./../../assets/img/AdobeStock.jpeg",
      text: "logiciels d'automatisations"
    },
  ]

  ngOnInit(): void {
  }

}
