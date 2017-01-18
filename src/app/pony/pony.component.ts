import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  @Input() ponyModel: PonyModel = { name: '', color: '', id: -1 };

  @Output() ponyClicked: EventEmitter<PonyModel> = new EventEmitter();

  constructor() { }

  getPonyImageUrl(): string {
    return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
  }

  ngOnInit() {
    console.log('Pony ' + this.ponyModel);
  }

  clicked() {
    console.log(`Pony ${this.ponyModel.name} has been clicked`);
    this.ponyClicked.emit(this.ponyModel);
  }
}
