import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isRTL() {
    const lang = document.querySelector('html').getAttribute('lang');
    if (['he'].includes(lang)) {
        return true;
    } else {
        return false;
    }
  }

  getLang() {
    return document.querySelector('html').getAttribute('lang');
  }

  getDayNames(language: string) {
    const lang = language ? language : document.querySelector('html').getAttribute('lang');
    switch (lang) {
      case 'he':
        return ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];
    
      default: // en
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
  }

  getMonthNames(language: string) {
    const lang = language ? language : document.querySelector('html').getAttribute('lang');
    switch (lang) {
      case 'he':
        return ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
    
      default: // en
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
  }
}
