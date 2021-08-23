import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly messagesPath = 'messages'
  private readonly projectsPath = 'projects'
  constructor(
    private store: AngularFirestore
  ) { }

  postMessage(message: {name: string, email: string, message: string}) {
    return this.store.collection(this.messagesPath).add(message)
  }

  getAllProjects() {
    return this.store.collection<{title: string, description: String, images: String[]}>(this.projectsPath).snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }

  addProject() {
    return this.store.collection(this.projectsPath).add({
      title: "Systeme de productions des emplois de temps incremental",
      description: "Il s'agit ici d'une application web permettant de gere les emplois de temps dans les milieus scholaire et universitaire. Il resout les problemes des conflits de periodes en permettant a chaque ensegnant de choisir ses heures de cours dans des salles de classes donnees. Et les emplois de temps peuvent avoir une durree de validite en cas des disponibilites instables des enseignants",
      images: ["https://firebasestorage.googleapis.com/v0/b/ero-coding-space.appspot.com/o/projects%2Fconfig.png?alt=media&token=6fab3f56-2387-4507-935b-4dfb416930de"]
    })
  }
}
