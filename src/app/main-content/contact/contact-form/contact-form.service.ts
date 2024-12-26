import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactData } from '../../../interfaces/contactData.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactFormService {
  private http = inject(HttpClient);

  private post = {
    endPoint: 'https://www.marcus-hartmann.net/sendMail.php',
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  sendMail(contactData: ContactData): Observable<any> {
    return this.http.post(
      this.post.endPoint,
      JSON.stringify(contactData),
      this.post.options
    );
  }
}