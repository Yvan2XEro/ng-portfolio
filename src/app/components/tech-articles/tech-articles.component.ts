import { map } from 'rxjs/operators';
import { TechsService } from './../../shared/services/techs.service';
import { InputTechsModalComponent } from './../input-techs-modal/input-techs-modal.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tech-articles',
  templateUrl: './tech-articles.component.html',
  styleUrls: ['./tech-articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechArticlesComponent implements OnInit {
  techs: any[] = []
  constructor(
    private matDialog: MatDialog,
    private techsService: TechsService,
  ) { }

  ngOnInit(): void {
    this.techsService.getAll().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
      .subscribe(data => {
        this.techs = data
      })
  }
  openEditModale(){
    const dialogRef = this.matDialog.open(InputTechsModalComponent,{
      panelClass: 'primary-theme',
      maxWidth: '250px',
      width: '250px'
    })
    dialogRef.afterClosed().subscribe(()=>{this.ngOnInit()})
  }
}
