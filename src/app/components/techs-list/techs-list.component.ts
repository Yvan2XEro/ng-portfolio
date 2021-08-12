import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techs-list',
  templateUrl: './techs-list.component.html',
  styleUrls: ['./techs-list.component.scss']
})
export class TechsListComponent implements OnInit {

  constructor() { }

  @Input()
  techs: {imgUrl:string, name:'', state:number,categorie: string }[]=[]
  @Input()
  title: string = ''
  ngOnInit(): void {
  }

}
