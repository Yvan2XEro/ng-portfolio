import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  public showCarousel$ = new BehaviorSubject<boolean>(false)
  constructor() { }
}
