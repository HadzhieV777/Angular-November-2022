import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  showEditMode = false;
  formSubmitted = false;

  form!: FormGroup;
  counter = 1;

  get user() {
    const { username, email, tel: telephone } = this.userService.user!;
    const [ext, ...tel] = telephone.split(' ');
    return {
      username,
      email,
      tel: tel.join(' '),
      ext,
    };
  }

  // this.user = user()

  createForm(formValue: any) {
    this.form = this.fb.group({
      username: [
        formValue.username,
        [Validators.required, Validators.minLength(5)],
      ],
      email: [
        formValue.email,
        [Validators.required, appEmailValidator(appEmailDomains)],
      ],
      ext: [formValue.ext],
      tel: [formValue.tel],
      addresses: this.fb.array(
        new Array(this.counter).fill(null).map((_, i) => {
          return this.fb.group({
            postCode: formValue.addresses[i]?.postCode || '',
            street: formValue.addresses[i]?.street || '',
          });
        })
      ),
    });
  }

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.createForm({
      ...this.user,
      addresses: [{ postCode: 'Hello', street: 'World' }],
    });
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  saveProfile(): void {
    this.formSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const { username, email, ext, tel } = this.form.value;
    this.userService.user = {
      username,
      email,
      tel: ext + ' ' + tel,
    } as any;
    this.toggleEditMode();
    console.log(this.form.value);
  }
}
