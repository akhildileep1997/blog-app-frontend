import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-z1-9 ]*')]],
    email: ['', [Validators.required, Validators.email]],
    response: ['', [Validators.required]],
  });
  contact() {
    if (this.contactForm.valid) {
      let name = this.contactForm.value.name;
      let email = this.contactForm.value.email;
      let response = this.contactForm.value.response;
      console.log(name, email, response);
      this.api.feedback(name, email, response).subscribe((response: any) => {
        console.log(response);
        alert('response sended successfully');
        setTimeout(() => {
          this.contactForm.reset();
        }, 2000);
      });
    } else {
      alert('please fill the form');
    }
  }
}
