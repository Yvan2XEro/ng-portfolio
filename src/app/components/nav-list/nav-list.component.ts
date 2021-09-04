import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from '../../shared/services/local.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    public localService: LocalService
  ) { }
  public activeHome: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  ngOnInit(): void {
    this.localService.lang$.next(localStorage.getItem('lang') || 'fr')
    this.translateService.use(localStorage.getItem('lang') || 'fr')
  }
  reload() {
    location.assign('/')
  }

  changeLocale(lang: string) {
    localStorage.setItem('lang', lang)
    this.translateService.use(lang)
    this.localService.lang$.next(lang)
  }
}
