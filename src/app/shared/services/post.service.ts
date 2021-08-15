import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly messagesPath = 'messages'
  constructor(
    private store: AngularFirestore
  ) { }

  postMessage(message: {name: string, email: string, message: string}) {
    return this.store.collection(this.messagesPath).add(message)
  }
}
