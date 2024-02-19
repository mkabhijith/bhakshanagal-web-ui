import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_HEADERS } from '../shared/constants/http-headers';
import { StorageService } from '../shared/services/storage/storage.service';

const EXEMPTIONS: Record<string, string[]> = {
  [HTTP_HEADERS.auth]: [
    `login`,
    `signup`,
    `verification`,
    `change-password`,
    `forgotpassword`,
  ],
  [HTTP_HEADERS.language]: [],
};
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url } = req;

    if (!this.isUrlInArray(url, EXEMPTIONS[HTTP_HEADERS.language])) {
      req = req.clone({
        setHeaders: {
          [HTTP_HEADERS.language]: ` ${this.storageService.languageId}`,
        },
      });
    }
    if (!this.isUrlInArray(url, EXEMPTIONS[HTTP_HEADERS.auth])) {
      req = req.clone({
        setHeaders: {
          [HTTP_HEADERS.auth]: ` ${this.storageService.authKey}`,
          [HTTP_HEADERS.user]: ` ${this.storageService.getUserId}`,
        },
      });
    }

    return next.handle(req);
  }
  private isUrlInArray(url: string, arr: string[]) {
    let index;

    for (index in arr) {
      if (url.search(arr[index]) !== -1) {
        return true;
      }
    }

    return false;
  }
}
