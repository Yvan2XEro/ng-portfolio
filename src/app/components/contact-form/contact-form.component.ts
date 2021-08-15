import { PostService } from './../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  message = {
    email: '',
    name: '',
    message: ''
  }
  constructor(
    private postService: PostService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  send(){
    this.postService.postMessage(this.message)
    .then(()=>{
      this.matSnackBar.open('Cannonball!!', 'Splash', { duration: 5000  })
    });
  }
}
