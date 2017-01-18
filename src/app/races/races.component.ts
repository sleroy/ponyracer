import { raceStatic } from 'rxjs/operator/race';
import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  public races: Array<RaceModel>;



  constructor() { }

  ngOnInit() {
    // Initialize hardcoded values
    this.races = [
      { name: 'Lyon' }, {
        name: 'London'
      }
    ];
  }

}
