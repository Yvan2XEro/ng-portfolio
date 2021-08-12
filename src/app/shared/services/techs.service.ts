import { Tech } from './../interfaces/Technologie';
import { AngularFireDatabase, } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  private path = 'technologies'
  techsRef: AngularFirestoreCollection<{name: string, imgUrl: string, state: number, categorie: string}> = this.store.collection(this.path)
  constructor(
    private store: AngularFirestore,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  getAll() {
    return this.techsRef
  }

  add(data: {name: string, imgUrl: string, state: number, categorie: string}) {
    return this.store.collection(this.path).add(data)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  getAllTechs() {

    return this.store.collection<{name: string, imgUrl: string, state: number, categorie: string}[]>(this.path)
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
