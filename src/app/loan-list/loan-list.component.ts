import { CommonModule, NgFor } from '@angular/common'; // Import Location
import { Component } from '@angular/core';

import * as loansData from '../../database/loans.json';
@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css',
})
export class LoanListComponent {
  loanList = (loansData as any).default;
}

