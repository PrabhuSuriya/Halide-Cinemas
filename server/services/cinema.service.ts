import { Inject, Service } from '@tsed/common';
import { MongooseModel } from '@tsed/mongoose';
import { $log } from 'ts-log-debug';
import { Cinema } from '../models/cinema.model';

@Service()
export class CinemaService {
  constructor(@Inject(Cinema) private cinemaModel: MongooseModel<Cinema>) {
    this.reload();
  }

  async reload() {
    return this.cinemaModel
      .find({})
      .exec()
      .then(admit => {
        if (admit.length === 0) {
          this.cinemaModel.create(...require('../resources/cinemas.json'));
        }
      })
      .catch(err => console.error(err));
  }

  /**
   *
   * @returns {PaDashboardDto[]}
   */
  async get(): Promise<Cinema[]> {
    return this.cinemaModel.find().exec();
  }

  // /**
  //  * Get a user by his ID.
  //  * @param id
  //  * @returns {undefined|admit}
  //  */
  // async find(id: string): Promise<Admit> {
  //   $log.debug('Search a Admit from ID', id);
  //   const admit = await this.admitModel.findById(id).exec();

  //   $log.debug('Found', admit);
  //   return admit;
  // }

  // /**
  //  *
  //  * @returns {AdmitDemographic[]}
  //  */
  // async getAdmitKeyInfo(status: AdmitStatus): Promise<Admit[]> {
  //   console.log('status is', status);
  //   let statusList: any;
  //   // Server side paging to be enabled only for requests to pull all admits irrespective of status.
  //   switch (status) {
  //     case AdmitStatus.All:
  //       console.log('Inside all', AdmitStatus['All']);
  //       statusList = [AdmitStatus.BAC, AdmitStatus.Pipeline, AdmitStatus.Approved, AdmitStatus.Completed];
  //       //return this.admitModel.find().skip(pageSize * currentPage).limit(pageSize).select(ADMIT_KEY_INFO_COLUMNS).exec();
  //       return this.admitModel
  //         .find()
  //         .where('status')
  //         .in(statusList)
  //         .select(ADMIT_KEY_INFO_COLUMNS)
  //         .exec();

  //     case AdmitStatus.Active:
  //       console.log('Inside Active', AdmitStatus['Active']);
  //       statusList = [AdmitStatus.BAC, AdmitStatus.Pipeline];
  //       return this.admitModel
  //         .find()
  //         .where('status')
  //         .in(statusList)
  //         .select(ADMIT_KEY_INFO_COLUMNS)
  //         .exec();

  //     default:
  //       console.log('Inside default', AdmitStatus['All']);
  //       statusList = [status];
  //       return this.admitModel
  //         .find()
  //         .where('status')
  //         .in(statusList)
  //         .select(ADMIT_KEY_INFO_COLUMNS)
  //         .exec();
  //     //.slice([pageSize * currentPage, (currentPage + 1) * pageSize]);
  //   }
  //   //return this.admitModel.find().where('status').ne(status).select(ADMIT_KEY_INFO_COLUMNS).exec();
  //}
}
