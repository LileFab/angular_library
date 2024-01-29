import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersListComponent } from './members-list/members-list.component';

export const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'loan-list', component: LoanListComponent },
  { path: 'members-list', component: MembersListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'member-detail/:id', component: MemberDetailComponent },
  { path: 'loan-detail/:id', component: LoanDetailComponent },
  { path: 'home', component: AppComponent },
  { path: 'contact-form', component: ContactFormComponent}
];

