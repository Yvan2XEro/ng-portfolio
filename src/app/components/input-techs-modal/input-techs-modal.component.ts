import { finalize } from 'rxjs/operators';
import { TechsService } from './../../shared/services/techs.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input-techs-modal',
  templateUrl: './input-techs-modal.component.html',
  styleUrls: ['./input-techs-modal.component.scss']
})
export class InputTechsModalComponent implements OnInit {

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
    private dialogRef: MatDialogRef<InputTechsModalComponent>,
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
            this.techsService.add({ name: this.technologie, imgUrl: url, state: this.level, categorie: this.categorie })
            .then(res=>console.log(res))
            this.resetForm()
          })
        })
      )
      .subscribe(() => {
        this.close()
      }, err => console.log(err))
  }
  close() {
    this.dialogRef.close()
  }
  resetForm() {
    this.technologie = ''
    this.imageUrl = null
    this.selectedImg = null
    this.imgSrc = 'assets/img/angular.png'
  }

  changeSelectedCathegorie(cat: any) {
    this.categorie = cat.value
  }

}
