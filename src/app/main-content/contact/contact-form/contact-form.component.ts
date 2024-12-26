import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../../../interfaces/contactData.interface';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private contactFormService = inject(ContactFormService);

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicyChecked: false,
  };

  mailTest = true;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.contactFormService.sendMail(this.contactData).subscribe({
        next: () => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Mailtest: Nur Demonstration, kein Versand
      ngForm.resetForm();
    }
  }
}