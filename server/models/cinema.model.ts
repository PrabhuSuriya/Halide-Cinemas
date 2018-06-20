import { MongooseDocument } from '@tsed/mongoose/lib';
import { Model } from '@tsed/mongoose';
import { Schema } from 'mongoose';
import { Enum, IgnoreProperty, Pattern, Property, Required } from '@tsed/common';

@Model()
export class Cinema {
  @Property() _id: string;

  @Property() name: string;
  @Property() year: string;
  @Property() genre: string[];
  @Property() director: string;

  @Property() posterUrl: string;
  @Property() posterImgUrl: string;

  @Property() synopsis: string;
  @Property() imdbId: string;
  @Property() imdbLink: string;
  @Property() rating: string;
  @Property() ratingCount: string;
}
