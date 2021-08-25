import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly messagesPath = 'messages'
  private readonly projectsPath = 'projects'
  private readonly raitingsPath = 'raitings'
  constructor(
    private store: AngularFirestore
  ) { }

  postMessage(message: {name: string, email: string, message: string}) {
    return this.store.collection(this.messagesPath).add(message)
  }

  getAllProjects() {
    return this.store.collection<{title: string, description: String, images: String[]}[]>(this.projectsPath).snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }

  addProject(project:{ title: string, description: string, images: string[] }) {
    return this.store.collection(this.projectsPath).add(project)
  }

  addRaiting(r: {name: string, email: string | null, message: string, stars: number}) {
    return this.store.collection(this.raitingsPath).add(r)
  }

  getAllRecommandations() {
    return this.store.collection<{name: string, email: string | null, message: string, stars: number}[]>(this.raitingsPath).snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }
}
