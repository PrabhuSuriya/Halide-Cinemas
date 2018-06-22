import { Inject, Service } from '@tsed/common';
import { MongooseModel } from '@tsed/mongoose';
import { $log } from 'ts-log-debug';
import { MovieModel } from '../domain/movie.model';

@Service()
export class CinemaService {
  constructor(@Inject(MovieModel) private movieModel: MongooseModel<MovieModel>) {
    this.reload();
  }

  async reload() {
    return this.movieModel
      .find({})
      .exec()
      .then(data => {
        if (data.length === 0) {
          this.movieModel.create(...require('../resources/movies.json'));
        }
      })
      .catch(err => console.error(err));
  }

  async get(): Promise<MovieModel[]> {
    return this.movieModel.find({}).exec();
  }
  async getbyId(id: string): Promise<MovieModel> {
    return this.movieModel.findById(id).exec();
  }
}

//     case AdmitStatus.Active:
//       console.log('Inside Active', AdmitStatus['Active']);
//       statusList = [AdmitStatus.BAC, AdmitStatus.Pipeline];
//       return this.admitModel
//         .find()
//         .where('status')
//         .in(statusList)
//         .select(ADMIT_KEY_INFO_COLUMNS)
//         .exec();
