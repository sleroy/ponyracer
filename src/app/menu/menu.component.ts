import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public navbarCollapsed = true;

  constructor() { }

  /** Collapse toggle button  */
  toggleNavbar() {
    console.log("Click on button");
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  ngOnInit() {
  }

}
