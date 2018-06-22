import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { MovieModel } from '../../shared/models/cinema';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: MovieModel[] = [];
  constructor(private _adminService: AdminService) {}

  ngOnInit() {
    this.init();
  }
  init() {
    this._adminService.getMovies().subscribe(data => {
      this.movies = data;
      console.log(data);
    });
  }
}
