import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Lang {
  hl: string
  country: string
  language: string
}
@Injectable()

export class StoreService {
  private langs: Lang[] = [
    { hl: 'en', country: 'US', language: 'English' },
    { hl: 'pl', country: 'Pl', language: 'Poland' }
  ]
  private langSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  private countrySubject: BehaviorSubject<string> = new BehaviorSubject<string>('US');
  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('English');

  set _lang(newLang: string) {
    this.langSubject.next(newLang);
  }

  get _lang$() {
    return this.langSubject;
  }

  set _country(newLang: string) {
    this.countrySubject.next(newLang);
  }

  get _country$() {
    return this.countrySubject;
  }

  set _language(newLang: string) {
    this.languageSubject.next(newLang);
  }

  get _language$() {
    return this.languageSubject;
  }
  get _langArray() {
    return this.langs;
  }
}