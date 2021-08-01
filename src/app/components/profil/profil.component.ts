import { TechsService } from './../../shared/services/techs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  age = (new Date()).getFullYear() - 1999

  frontends: { name: string, img: string }[] = []
  backends: { name: string, img: string }[] = []
  fmobiles: { name: string, img: string }[] = []
  socials: { classIcon: string, url: string }[] = [
    {
      classIcon: "fab fa-github",
      url: "https://github.com/Yvan2Ero"
    },
    {
      classIcon: "fab fa-discord",
      url: "https://github.com/Yvan2Ero"
    },
    {
      classIcon: "fab fa-facebook",
      url: "https://github.com/Yvan2Ero"
    },
    {
      classIcon: "fab fa-twitter",
      url: "https://github.com/Yvan2Ero"
    },
    {
      classIcon: "fab fa-linkedin-in",
      url: "https://github.com/Yvan2Ero"
    },
  ]
  constructor(
    private techsService: TechsService
  ) { }

  ngOnInit(): void {
    this.frontends = this.techsService.getAllFrontendFrameworks()
    this.backends = this.techsService.getAllBackendFrameworks()
    this.fmobiles = this.techsService.getAllMobileFrameworks()
  }

}
