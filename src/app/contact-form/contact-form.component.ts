import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  providers: [AlertService],
})
export class ContactFormComponent {

  message: string = "";
  email: string = "";

  constructor(private alertService: AlertService) {}
  
  showAlert(): void {
    this.alertService.showAlert("You send this message : " + this.message + " with this email : " + this.email);
  }
}
