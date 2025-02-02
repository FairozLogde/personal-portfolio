import { Component } from '@angular/core';
import {ReactiveFormsModule,FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  contactForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    website: new FormControl(''),
    message: new FormControl('')
  });

  onSubmit() {
    console.warn(this.contactForm.value);
  }

}
