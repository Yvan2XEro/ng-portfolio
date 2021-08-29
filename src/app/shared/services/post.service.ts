import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly messagesPath = 'messages'
  private readonly projectsPath = 'projects'
  private readonly raitingsPath = 'raitings'
  private readonly postsPath = 'posts'
  constructor(
    private store: AngularFirestore,
  ) { }

  addArticle(article: Post) {
    return this.store.collection<Post>(this.postsPath).add(article).then(res =>{
      res.get().then(response =>{
        this.store.collection(this.postsPath).doc(response.id).update({
          slug: this.slugify(article.title)+"-"+response.id
        }).then(result =>{
          console.log(result)
        })
      })
    })
  }

  retrieveArticleBySlug(slug: string) {
    const parts = slug.split('-')
    let id = slug
    if (parts.length>1)
      id = parts[parts.length-1]
    return this.store.collection<Post>(this.postsPath).doc(id).get()
  }

  getAllArticles() {
    return this.store.collection<Post[]>(this.postsPath).snapshotChanges()
    .pipe(map(changes =>changes.map(c=>({id: c.payload.doc.id, ...c.payload.doc.data()}))))
  }

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

  slugify (str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
}
