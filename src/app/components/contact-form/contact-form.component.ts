import { LoaderService } from './../../shared/services/loader.service';
import { PostService } from './../../shared/services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input()
  title = "Contact me"
  message = {
    email: '',
    name: '',
    message: ''
  }
  constructor(
    private postService: PostService,
    private matSnackBar: MatSnackBar,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
  }
  send(){
    this.loaderService.isLoading.next(true)
    this.postService.postMessage(this.message)
    .then(()=>{
      this.loaderService.isLoading.next(false)
      this.matSnackBar.open('Message sent!', 'Close', { duration: 5000  })
      this.message = {
        email: '',
        name: '',
        message: ''
      }
    });
  }
}
