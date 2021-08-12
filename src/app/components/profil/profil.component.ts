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
  techs:any[] = []
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
    this.techsService.getAllTechs().snapshotChanges()
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

    this.techsService.getAllBackendFrameworks()
    this.techsService.getAllMobileFrameworks()
  }
  filterTechs(cathegorie: string) {
    switch (cathegorie) {
      case 'f':
        return this.techs.filter(t=>t.categorie=='Frontend')
        .sort(function(a, b){
          if(a.state<b.state)
            return 1
          if(a.state>b.state)
            return -1
            return 0
        })

      case 'm':
        return this.techs.filter(t=>t.categorie=='Mobile')
        .sort(function(a, b){
          if(a.state<b.state)
            return 1
          if(a.state>b.state)
            return -1
            return 0
        })
      case 'b':
        return this.techs.filter(t=>t.categorie=='Backend')
        .sort(function(a, b){
          if(a.state<b.state)
            return 1
          if(a.state>b.state)
            return -1
            return 0
        })
      default:
        return this.techs;
    }
  }

}
