import { Location } from '@angular/common'; // Import Location
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as booksData from '../../database/books.json';
import * as loansData from '../../database/loans.json';
import * as membersData from '../../database/members.json';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [],
  templateUrl: './loan-detail.component.html',
  styleUrl: './loan-detail.component.css',
})
export class LoanDetailComponent implements OnInit {
  loanId: number = 0;
  memberId: number = 0;
  bookId: number = 0;

  loanList = (loansData as any).default;
  memberList = (membersData as any).default;
  bookList = (booksData as any).default;

  loan: any;
  member: any;
  book: any;

  constructor(private route: ActivatedRoute, private _location: Location) {} // Declare _location

  back() {
    this._location.back();
  }

  ngOnInit(): void {
    this.loanId = parseInt(this.route.snapshot.params['id']);

    this.loan = this.loanList.find((loan: any) => loan.id === this.loanId);
    this.member = this.memberList.find((member: any) => member.id === this.loan.memberId);
    this.book = this.bookList.find((book: any) => book.id == this.loan.bookId);
  }
}
