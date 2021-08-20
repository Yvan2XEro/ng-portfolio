import { Component, Input, OnChanges, OnDestroy, OnInit, HostBinding  } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';


@Component({
  selector: 'app-lightbox-image',
  templateUrl: './lightbox-image.component.html',
  styleUrls: ['./lightbox-image.component.scss'],
  animations: [
    trigger('lightboxFade', [
      transition(':lightboxFadeEnterActive', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({opacity: '0.3s'}))
      ]),
      transition(':lightboxFadeLeaveActive', [
        animate('200ms ease-in', style({opacity: '0.3s'}))
      ]),
      transition(':lightboxFadeLeaveActive', [
        animate('200ms ease-in', style({opacity: '0.3s'}))
      ]),
      transition(':lightboxFadeLeaveActive', [
        animate('200ms ease-in', style({opacity: '0.3s'}))
      ])
    ])
  ]
})
export class LightboxImageComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  imageUrl: string = ''

  isLoading = true

  src: string = ''

  style:any

  private resizeImageEvent = ()=>this.resizeImage()
  constructor() { }

  ngOnInit(): void {
    this.loadImage()
  }
  ngOnChanges(): void {
    this.loadImage()
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeImageEvent)
  }
  private image:any
  loadImage() {
    this.image = new Image()
    this.image.src = this.imageUrl

    this.image.onload = ()=>{
      this.isLoading = false
      this.src = this.imageUrl
      this.resizeImageEvent()
    }
    window.addEventListener('resize', this.resizeImageEvent)
  }

  resizeImage() {
    let imgWidth = this.image.width,
      imgHeight = this.image.height
    if(imgWidth>window.innerWidth || imgHeight>window.innerHeight) {
      let windowRatio = window.innerWidth / window.innerHeight,
        ratio = imgWidth / imgHeight
        if(ratio > windowRatio) {
          imgWidth = window.innerWidth
          imgHeight = imgWidth / ratio
        } else {
          imgHeight = window.innerHeight
          imgWidth = imgHeight * ratio
        }
    }
    this.style = {
      width: imgWidth + 'px',
      height: imgHeight + 'px',
      top: ((window.innerHeight - imgHeight) * 0.5) + 'px',
      left: ((window.innerWidth - imgWidth) * 0.5) + 'px'
    }
    console.log(this.style)
  }
}
