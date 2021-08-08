import { TechsService } from './../../shared/services/techs.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  age = (new Date()).getFullYear() - 1999

  frontends: any = []
  backends: any = []
  fmobiles: any = []
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
    this.techsService.getAllFrontendFrameworks().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
      .subscribe(data => {
        this.frontends = data
      })

    this.techsService.getAllBackendFrameworks()
    this.techsService.getAllMobileFrameworks()
  }

}
