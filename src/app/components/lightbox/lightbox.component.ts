import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations:  [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(5000, style({opacity: 1}))
      ])
    ])
  ]
})
export class LightboxComponent implements OnInit {
  images:string[] = []
  i:number = 0
  indexedImage = ''
  constructor(
    private dialogRef: MatDialogRef<LightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {
   }

  ngOnInit(): void {
    console.log("Images:",this.data)
    this.images = this.data
    this.indexedImage = this.images[this.i]
  }

  close() {
    this.dialogRef.close();
  }
  next() {
    this.i ++
    if(this.i>=this.images.length)
      this.i = 0
    this.indexedImage = this.images[this.i]
  }
  prev() {
    this.i --
    if(this.i<0)
      this.i = this.images.length-1
    this.indexedImage = this.images[this.i]
  }
}
