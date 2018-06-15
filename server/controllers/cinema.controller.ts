import { Controller, Get, Post, Authenticated, Required, BodyParams, Delete, Put, HeaderParams, Status, PathParams, QueryParams } from '@tsed/common';
import { NotFound, BadRequest, Conflict } from 'ts-httpexceptions';
import { Request, Response } from 'express';
import * as Express from 'express';
import { Mongoose } from 'mongoose';

import { Cinema } from '../models/cinema.model';
import { CinemaService } from '../services/cinema.service';

@Controller('/cinema')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get('/')
  @Status(200, { description: 'Success', type: Cinema })
  async getCinemas(): Promise<Cinema[]> {
    return this.cinemaService.get();
  }
}
