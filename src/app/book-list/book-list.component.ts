import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import * as booksData from '../../database/books.json';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  bookList = (booksData as any).default;
}
