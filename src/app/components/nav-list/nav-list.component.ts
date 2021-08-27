import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  constructor() { }
  public activeHome: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  ngOnInit(): void {
  }
  reload() {
    location.assign('/')
  }
}
