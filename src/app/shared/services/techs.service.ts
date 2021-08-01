import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  constructor() { }

  getAll() {
    return []
  }

  getAllFrontendFrameworks() {
    return [
      {
        name: "React JS",
        img: "./../../../assets/img/react.png"
      }, {
        name: "Qwik",
        img: "./../../../assets/img/vue.png"
      }, {
        name: "Vue",
        img: "./../../../assets/img/vue.png"
      }, {
        name: "Angular",
        img: "./../../../assets/img/angular.png"
      },
    ]
  }

  getAllBackendFrameworks() {
    return [
      {
        name: "Django",
        img: "./../../../assets/img/dj.png"
      },
      {
        name: "Spring",
        img: "./../../../assets/img/spring.png"
      },
      {
        name: "Symfony",
        img: "./../../../assets/img/symfony.png"
      },
      {
        name: "Node JS + Express",
        img: "./../../../assets/img/nodejs.png"
      },
      {
        name: "Deno",
        img: "./../../../assets/img/deno.png"
      },
      {
        name: "Laravel",
        img: "./../../../assets/img/laravel.png"
      },
    ]
  }

  getAllMobileFrameworks() {
    return [
      {
        name: "React native",
        img: "./../../../assets/img/react.png"
      },
      {
        name: "Kotlin",
        img: "./../../../assets/img/kotlin.png"
      },
      {
        name: "Ionic",
        img: "./../../../assets/img/ionic.png"
      },
      {
        name: "Flutter",
        img: "./../../../assets/img/flutter.png"
      },
    ]
  }
}
