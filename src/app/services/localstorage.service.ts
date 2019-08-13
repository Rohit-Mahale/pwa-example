import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  getItem(key: string) {
    let result = null;
    result = localStorage.getItem(key);
    if (result !== 'undefined' && result !== null) {
      result = JSON.parse(result);
    }
    return result;
  } 

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }
}
