import { MongooseDocument } from '@tsed/mongoose/lib';
import { Model, MongoosePlugin } from '@tsed/mongoose';
import { Schema } from 'mongoose';
import { Enum, IgnoreProperty, Pattern, Property, Required, PropertyType } from '@tsed/common';
import * as mongoosePaginate from 'mongoose-paginate';

@Model()
@MongoosePlugin(mongoosePaginate, {})
export class MovieModel {
  @Property() _id: string;

  @Property() name: string;
  @Property() year: string;
  @PropertyType(String) genre: string[];
  @Property() director: string;

  @Property() posterUrl: string;
  @Property() posterImgUrl: string;

  @Property() synopsis: string;
  @Property() imdbId: string;
  @Property() imdbLink: string;
  @Property() rating: string;
  @Property() ratingCount: string;
}
