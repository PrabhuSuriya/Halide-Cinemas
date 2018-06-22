import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  showLoader: boolean = false;
  constructor() {}

  public toggleSpinner(show: boolean) {
    this.showLoader = show;
  }
}
