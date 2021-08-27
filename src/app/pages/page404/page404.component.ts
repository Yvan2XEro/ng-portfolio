import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit(): void {
    this.app.setTitle('Not found')
  }

}
