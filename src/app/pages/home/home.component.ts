import { CarouselService } from './../../shared/services/carousel.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public carousel: CarouselService,
    private app: AppComponent
  ) { }

  ngOnInit(): void {
    this.app.setTitle('Home')
  }

}
