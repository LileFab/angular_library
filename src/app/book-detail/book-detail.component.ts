import { Location } from '@angular/common'; // Import Location
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as booksData from '../../database/books.json';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  bookId: number = 0;
  bookList = (booksData as any).default;
  book: any;

  constructor(private route: ActivatedRoute, private _location: Location) {} // Declare _location

  back() {
    this._location.back();
  }

  ngOnInit(): void {
    this.bookId = parseInt(this.route.snapshot.params['id']);
    this.book = this.bookList.find((book: any) => book.id === this.bookId);
  }
}
