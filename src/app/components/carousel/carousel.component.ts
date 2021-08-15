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
      title: "Explorez mon esperience en developpement,",
      url: "./../../assets/img/aplication-mobile-smartphone.jpg",
      text: "Je suis developpeur"
    },
    {
      title: "Decouvrez mes technologies, et mes technique de developpement",
      url: "./../../assets/img/application_internet.jpg",
      text: "apllications web"
    },
    {
      title: "Decouvrez mes services et contectez moi pour plus d'informations.",
      url: "./../../assets/img/AdobeStock.jpeg",
      text: "logiciels d'automatisations"
    },
  ]

  ngOnInit(): void {
  }

}
