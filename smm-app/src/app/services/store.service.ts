import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()

export class StoreService{
    private langSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');

    set _lang(newLang: string){
      this.langSubject.next(newLang);
    }

    get _lang$(){
      return this.langSubject;
    }
}