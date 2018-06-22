import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<any> {
  constructor(private adminService: AdminService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.adminService.getMovie(route.paramMap.get('id'));
  }
}
