import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isToggleMenu: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    // this.menuItems = getAllMenuItemComponent();
  }

  public toggleMenu(): void {
    this.isToggleMenu = !this.isToggleMenu;
  }

}
