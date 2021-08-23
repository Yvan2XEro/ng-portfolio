import { LightboxComponent } from './../lightbox/lightbox.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects: any[] = []
  constructor(
    private matDialog: MatDialog,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadProjects()
  }
  loadProjects() {
    this.postService.getAllProjects()
    .subscribe((projects:any) => this.projects = projects)
  }
  openLightbox(images:string[]) {
    this.matDialog.open(LightboxComponent, {
      data: images,
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
