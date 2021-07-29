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
  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 644px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.showToolbar = false
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.showToolbar = true
      }
    });
  }
}
