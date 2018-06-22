import { Component } from '@angular/core';
import { StorageService } from './shared/services/storage.service';
import { RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _storage: StorageService, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._storage.toggleSpinner(true);
    }
    if (event instanceof NavigationEnd) {
      this._storage.toggleSpinner(false);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._storage.toggleSpinner(false);
    }
    if (event instanceof NavigationError) {
      this._storage.toggleSpinner(false);
    }
  }
}
