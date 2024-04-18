import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedCountryIdService {

  constructor() { }

  private countryIdSubject = new BehaviorSubject<number>(0);
  countryId$ = this.countryIdSubject.asObservable();

  getCountryId(id: number) {
    console.log('from service: ', id)
    this.countryIdSubject.next(id);
  }
}
