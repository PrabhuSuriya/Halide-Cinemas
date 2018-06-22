import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { MovieModel } from '../../shared/models/cinema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: MovieModel[] = [];
  constructor(private _adminService: AdminService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.init();
  }
  init() {
    this.movies = this.route.snapshot.data.movies;
  }
}
