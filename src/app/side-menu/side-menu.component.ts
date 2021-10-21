import { Component, OnInit } from '@angular/core';
import { animateMenuText, animateText, onSideNavChange } from '../animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [onSideNavChange, animateText, animateMenuText]
})
export class SideMenuComponent implements OnInit {


  public sideNavState: boolean = false;

  constructor(private _sidenavService: SharedService) { }

  ngOnInit(): void {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
}
