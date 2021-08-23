import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';


const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];


@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
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
