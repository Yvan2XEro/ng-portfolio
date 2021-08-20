import { LightboxComponent } from './../lightbox/lightbox.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openLightbox(event:any) {
    this.matDialog.open(LightboxComponent, {
      width: '100%',
      height: '100%',
      position: {
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px'
      }
    })
  }
}
