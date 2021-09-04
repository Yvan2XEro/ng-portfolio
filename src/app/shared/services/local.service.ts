import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LocalService{
  public lang$: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('lang')||'fr');
}
