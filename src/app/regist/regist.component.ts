import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Routes, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-regist',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.css'
})
export class RegistComponent {
  registForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        username: ['', [Validators.required, Validators.pattern(/^[^\s]{0,}$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
        confpassword: ['', [Validators.required]]
      }
    );
  }
  handleIt() {
    console.log(this.registForm)
  }

}
