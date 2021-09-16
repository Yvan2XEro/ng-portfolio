import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StarRatingColor } from './raiting/raiting.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../shared/services/post.service';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input-rating-modale',
  templateUrl: './input-rating-modale.component.html',
  styleUrls: ['./input-rating-modale.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputRatingModaleComponent implements OnInit {
  starCount:number = 5;
  flag = "projects"
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  message = {
    email: '',
    name: '',
    message: '',
    proffession: 'Devellopper',
    stars: 3
  }
  constructor(
    private snackBar : MatSnackBar,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  send(){
    if(this.message.name.length<2 && this.message.message.length < 10) {
      this.snackBar.open('The name and your message are too short!')
    } else if (this.message.message.length <10) {
      this.snackBar.open('The name and your message are too short!')
    } else {
      this.postService.addRaiting(this.message)
      .then(()=>{
        this.snackBar.open('Thank you!', 'close')
      })
      .catch(()=>{
        this.snackBar.open('An error occured, please try later!', 'close')
      })
    }

  }
  close(response: boolean) {
  }
  onRatingChanged(rating:number){
    this.message.stars = rating;
  }
}
