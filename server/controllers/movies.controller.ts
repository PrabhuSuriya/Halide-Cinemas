import { Controller, Get, Post, Authenticated, Required, BodyParams, Delete, Put, HeaderParams, Status, PathParams, QueryParams } from '@tsed/common';
import { NotFound, BadRequest, Conflict } from 'ts-httpexceptions';
import { Request, Response } from 'express';
import * as Express from 'express';
import { Mongoose } from 'mongoose';

import { MovieModel } from '../domain/movie.model';
import { CinemaService } from '../services/cinema.service';

@Controller('/cinema')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get('/')
  @Status(200, { description: 'Success', type: MovieModel })
  async getCinemas(): Promise<MovieModel[]> {
    return this.cinemaService.get();
  }

  @Get('/:id')
  @Status(200, { description: 'Success', type: MovieModel })
  async getCinema(
    @PathParams("id") id:string
  ): Promise<MovieModel> {
    return this.cinemaService.getbyId(id);
  }
}
