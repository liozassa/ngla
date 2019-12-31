import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isRTL() {
    const lang = document.querySelector('html').getAttribute('lang');
    console.log('lang', lang);
    if (['he'].includes(lang)) {
        return true;
    } else {
        return false;
    }
  }
}
