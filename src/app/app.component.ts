import { CarouselService } from './shared/services/carousel.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showToolbar = false;
  showSidebar = true
  showNavbar = true;
  constructor(
    private observer: BreakpointObserver,
    public carousel: CarouselService
  ) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 758px)']).subscribe((res) => {
      if (res.matches) {
        this.carousel.showCarousel$.next(false)
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.showToolbar = true
      } else {
        this.carousel.showCarousel$.next(true)
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.showToolbar = false
      }
    });
  }
}
