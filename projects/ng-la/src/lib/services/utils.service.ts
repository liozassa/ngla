import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  rtl_languages = ['he'];

  constructor() { }

  isRTL() {
    if (this.rtl_languages.includes(this.getLang())) {
        return true;
    } else {
        return false;
    }
  }

  getDirection() {
    return this.rtl_languages.includes(this.getLang())  ? 'rtl' : 'ltr';
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
