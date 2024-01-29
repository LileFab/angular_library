import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  showAlert(message: string): void {
    alert(message);
  }
}
