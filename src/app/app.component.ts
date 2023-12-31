import { LoaderService } from './shared/services/loader.service';
import { CarouselService } from './shared/services/carousel.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';

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
    public loaderService: LoaderService,
    private titleService: Title
  ) { }
  setTitle(title: string) {
    this.titleService.setTitle(title)
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 758px)']).subscribe((res) => {
      if (res.matches) {
        this.carousel.showCarousel$.next(false)
        this.sidenav.mode = 'over'
        this.sidenav.close()
        this.mobileDevice = true
        this.showToolbar = true
        this.showNavbar = false
        this.listenNavlinkClick()
      } else {
        this.carousel.showCarousel$.next(true)
        this.sidenav.mode = 'side'
        this.sidenav.open()
        this.mobileDevice = false
        this.showToolbar = false
        this.showNavbar = true
        this.stopListeningNavLinkClick()
      }
    });
  }
  listenNavlinkClick() {
    document.querySelectorAll('.nav-link').forEach(link =>{
      link.addEventListener('click', this.hideNav)
    })
  }
  stopListeningNavLinkClick() {
    document.querySelectorAll('.nav-link').forEach(link =>{
      link.removeEventListener('click', this.hideNav)
    })
  }

  private hideNav =()=> {
    this.showNavbar = false
  }
}
