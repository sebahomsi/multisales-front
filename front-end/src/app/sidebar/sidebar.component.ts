import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isToggleMenu: boolean = false;
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  public toggleMenu(): void {
    this.isToggleMenu = !this.isToggleMenu;
  }

  public gotoHome(): void {
    this.router.navigateByUrl("/");
  }

}
