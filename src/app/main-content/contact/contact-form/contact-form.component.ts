import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactData } from '../../../interfaces/contactData.interface';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicyChecked: false,
  }

  onSubmit() {
    console.log(this.contactData);
  }

}
