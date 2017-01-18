import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {
 private http: Http;

  public apiUrl: string = 'http://ponyracer.ninja-squad.com';

  constructor(http: Http) {
    this.http = http;
  }

  /** Returns a list of services */
  list(): Observable<Array<RaceModel>> {
    // Conversion of Response into RaceModel
    return this.http.get(`${this.apiUrl}/api/races?status=PENDING`).map(response => response.json());
  }

}
