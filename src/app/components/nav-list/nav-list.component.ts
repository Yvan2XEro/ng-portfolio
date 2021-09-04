import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  constructor(
    public translateService: TranslateService
  ) { }
  lang = ''
  public activeHome: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'fr'
    this.translateService.setDefaultLang('fr')
    this.translateService.use(this.lang)
  }
  reload() {
    location.assign('/')
  }

  changeLocale(lang: string) {
    localStorage.setItem('lang', lang)
    this.lang = lang
  }
}
