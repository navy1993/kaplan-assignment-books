import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { onMainContentChange } from 'src/app/animations';
import { SharedService } from 'src/app/shared.service';
import { BooksModel } from '../books.interface';

@Component({
  selector: 'app-books-component',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.scss'],
  animations: [onMainContentChange]
})
export class BooksComponentComponent implements OnInit {

  public sideNavValue: boolean = false;
  public onSideNavChange: boolean = false;

  constructor(private sidenavService: SharedService) {
    this.sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    })
  }
  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideNavValue = !this.sideNavValue;
  }



}
