import {Component, OnInit} from '@angular/core';
import {MenuInterface} from "../../interfaces/menu";
import {MenuItems} from "../../UI-data/menu";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  ListOfMenu: MenuInterface[] = MenuItems;

  ToggleMenu: boolean = false;
  IsDropdown: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.ToggleMenu = !this.ToggleMenu
  }

  onMenuDropdown(): void {
    this.IsDropdown = !this.IsDropdown
  }

}
