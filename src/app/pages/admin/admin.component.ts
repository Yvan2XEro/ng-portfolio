import { TechsService } from './../../shared/services/techs.service';
import { AngularFireStorage } from '@angular/fire/storage'
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  path = ''
  technologie = 'Backend'
  imageUrl: any
  categorie = ''
  imgSrc = 'assets/img/angular.png'
  selectedImg: any
  techs = {
    backend: "Backend",
    frontend: "Frontend",
    mobile: "Mobile"
  }
  level = 0
  constructor(
    private angularFireStorege: AngularFireStorage,
    private techsService: TechsService,
  ) { }

  ngOnInit(): void {
    this.resetForm()
  }
  upload(event:any) {
    this.path = event.target.files[0]
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e: any) => this.imgSrc = e.target.result
      reader.readAsDataURL(event.target.files[0])
      this.selectedImg = event.target.files[0]
    } else {
      this.imgSrc = 'assets/img/angular.png'
      this.selectedImg = null
    }
  }

  submit() {
    const path = `technologies/${this.selectedImg.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`,
      fileRef = this.angularFireStorege.ref(path)
    this.angularFireStorege.upload(path, this.selectedImg)
      .snapshotChanges()
      .pipe(
        finalize(() => { fileRef.getDownloadURL().subscribe(
          url => {
            this.imageUrl = url
            console.log("URL:", url)
            alert(this.categorie)
            return
            this.techsService.add({ name: this.technologie, imgUrl: url, state: this.level, categorie: this.categorie })
            .then(res=>console.log(res))
            this.resetForm()
          })
        })
      )
      .subscribe(res => console.log(res), err => console.log(err))
  }

  resetForm() {
    this.technologie = ''
    this.imageUrl = null
    this.selectedImg = null
    this.imgSrc = 'assets/img/angular.png'
  }

  changeSelectedCathegorie(cat: any) {
    alert(cat.value)
    this.categorie = cat.value
  }

}
