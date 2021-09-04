import { LoaderService } from './../../shared/services/loader.service';
import { PostService } from './../../shared/services/post.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnChanges {
  @Input()
  title = ''
  message = {
    email: '',
    name: '',
    message: ''
  }
  constructor(
    private postService: PostService,
    private matSnackBar: MatSnackBar,
    private loaderService: LoaderService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges():void {
    if(this.title == '')
    this.translateService.get('ContactFormComponent.ME_CONTACTER')
    .subscribe(val => this.title = val)
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
