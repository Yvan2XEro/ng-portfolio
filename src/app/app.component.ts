import { LoaderService } from './shared/services/loader.service';
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
  title = 'portfolio'

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  showToolbar = false
  showSidebar = true
  showNavbar = true
  mobileDevice = false
  constructor(
    private observer: BreakpointObserver,
    public carousel: CarouselService,
    public loaderService: LoaderService
  ) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 758px)']).subscribe((res) => {
      if (res.matches) {
        this.carousel.showCarousel$.next(false)
        this.sidenav.mode = 'over'
        this.sidenav.close()
        this.mobileDevice = true
        this.showToolbar = true
        this.showNavbar = false
      } else {
        this.carousel.showCarousel$.next(true)
        this.sidenav.mode = 'side'
        this.sidenav.open()
        this.mobileDevice = false
        this.showToolbar = false
        this.showNavbar = true
      }
    });
  }
}
