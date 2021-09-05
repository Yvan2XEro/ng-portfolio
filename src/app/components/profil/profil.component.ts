import { LoaderService } from './../../shared/services/loader.service';
import { TechsService } from './../../shared/services/techs.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  age = (new Date()).getFullYear() - 1999
  techs:any[] = []
  socials: { classIcon: string, url: string, title: string }[] = [
    {
      classIcon: "fab fa-github",
      url: "https://github.com/Yvan2Ero",
      title: "Github"
    },
    {
      classIcon: "fab fa-discord",
      url: "https://github.com/Yvan2Ero",
      title: "Discord"
    },
    {
      classIcon: "fab fa-facebook",
      url: "https://www.facebook.com/yvanjules.kana",
      title: "Facebook"
    },
    {
      classIcon: "fab fa-twitter",
      url: "https://twitter.com/ErocliteYvan",
      title: "Twitter"
    },
    {
      classIcon: "fab fa-linkedin-in",
      url: "https://github.com/Yvan2Ero",
      title: "Linkedin"
    },
  ]
  constructor(
    private techsService: TechsService,
    private loaderService: LoaderService,
    public app: AppComponent
  ) { }

  ngOnInit(): void {
    this.loaderService.isLoading.next(true)
    this.techsService.getAllTechs()
      .subscribe(data => {
        this.techs = data
        this.loaderService.isLoading.next(false)
      })
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

  close() {
    this.app.showSidebar = false
  }

}
