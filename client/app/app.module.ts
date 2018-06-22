import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MoviesComponent } from './admin/movies/movies.component';
import { MovieDetailComponent } from './admin/movie-detail/movie-detail.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, ContactUsComponent, AboutComponent, AdminComponent, MoviesComponent, MovieDetailComponent],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot(), HttpClientModule],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
