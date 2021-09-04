import { finalize } from 'rxjs/operators';
import { LoaderService } from './../services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.isLoading.next(true)
    return next.handle(request)
    .pipe(
      finalize(() => this.loaderService.isLoading.next(false))
    )
    ;
  }
}
