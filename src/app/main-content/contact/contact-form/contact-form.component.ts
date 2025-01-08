import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../../../interfaces/contactData.interface';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private http = inject(HttpClient);

  privacyPolicyChecked = false;
  formSubmitted = signal(false);
  emailFocused = signal(false);

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://marcus-hartmann.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.formSubmitted.set(true);
      document.body.classList.add('no-scroll');
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
    setTimeout(() => {
      this.formSubmitted.set(false);
      document.body.classList.remove('no-scroll');
    }, 3000);
  }

  closeDialog() {
    this.formSubmitted.set(false);
    document.body.classList.remove('no-scroll');
  }
}
