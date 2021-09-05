import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputRatingModaleComponent } from '../input-rating-modale/input-rating-modale.component';
import { PostService } from '../../shared/services/post.service';
@Component({
  selector: 'app-recommandations-list',
  templateUrl: './recommandations-list.component.html',
  styleUrls: ['./recommandations-list.component.scss']
})
export class RecommandationsListComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private postService: PostService
  ) { }


  recommandations: any[] = []
  ngOnInit(): void {
    this.postService.getAllRecommandations()
    .subscribe(recommandations =>{
      this.recommandations = recommandations
    })
  }

  openRatingModale() {
    this.matDialog.open(InputRatingModaleComponent, {autoFocus: false})
    .afterClosed().subscribe(()=>{
      this.ngOnInit()
    })
  }

}
