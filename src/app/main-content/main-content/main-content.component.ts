import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksModel } from 'src/app/books/books.interface';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public booksList: BooksModel[] = [];
  seachBarFormControl = new FormControl('');

  constructor(private sidenavService: SharedService) { }

  ngOnInit(): void {
    this.getBooksFromApi();
  }

  getBooksFromApi() {
    this.sidenavService.getBooks().subscribe((res: any) => {
      this.booksList = res.items;
    })
  }

}
