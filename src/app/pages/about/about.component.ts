import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    private app: AppComponent
  ) { }

  ngOnInit(): void {
    this.translateService.use(localStorage.getItem('lang')||'fr')
    this.app.setTitle('About')
  }

}
