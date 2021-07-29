import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  age = (new Date()).getFullYear() - 1999
  constructor() { }

  ngOnInit(): void {
  }

}
