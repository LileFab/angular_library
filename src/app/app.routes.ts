import { Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { MembersListComponent } from './members-list/members-list.component';

export const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'loan-list', component: LoanListComponent },
  { path: 'members-list', component: MembersListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent}
];
