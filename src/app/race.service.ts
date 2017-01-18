import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class RaceService {

  constructor() { }

  /** Returns a list of services */
  list(): Observable<Array<RaceModel>> {
    return Observable.of([
      { name: 'Lyon' },
      { name: 'Los Angeles' },
      { name: 'Sydney' },
      { name: 'Tokyo' },
      { name: 'Casablanca' }
    ]);
  }

}
