import { Model } from "@tsed/mongoose";
import { Schema } from "mongoose";
import {Enum, IgnoreProperty, Pattern, Property, Required} from "@tsed/common";

@Model()
export class Cinema {
    @Property()
    _id: string;
    @Property()
    movieName: string;
    @Property()
    directorName: string;
    @Property()
    runningLength: string;
    @Property()
    posterUrl: string;
}