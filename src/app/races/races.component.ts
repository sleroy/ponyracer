import { raceStatic } from 'rxjs/operator/race';
import { Component, Injectable, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';


@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
@Injectable()
export class RacesComponent implements OnInit {
  public races: Array<RaceModel>;

  private raceService: RaceService;


  constructor(raceService: RaceService) {

    this.raceService = raceService;
  }

  ngOnInit() {
    // Initialize hardcoded values
    const observableList = this.raceService.list();
    observableList.subscribe(
       raceList => this.races = raceList,
       error => console.log(error)
       );
  }

}

