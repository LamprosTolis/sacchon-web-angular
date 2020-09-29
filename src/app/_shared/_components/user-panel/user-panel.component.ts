import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  userPanelForm: FormGroup;
  email: '';
  password: '';
  firstName: '';
  lastName: '';
  phoneNumber: '';
  city: '';
  address: '';
  zipCode: '';
  submitted = false;
  loading = false;
  disEmail = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getCurrentUserInfo();
    
  }

  get data() {
    return this.userPanelForm.controls;
  }

  initializeForm() {
    this.userPanelForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      phoneNumber: new FormControl(),
      city: new FormControl(),
      address: new FormControl(),
      zipCode: new FormControl(),
    });
  }

  getCurrentUserInfo() {
    this.userService.getCurrentUserInfo().subscribe((data: any) => {
      this.email = data.email;
      this.userPanelForm.setValue({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        city: data.city,
        address: data.address,
        zipCode: data.zipCode,
      });
    });
  }

  disableAccount(){
    console.log(this.email);
    this.userService
      .disableUser(this.email)
      .subscribe((a) => {
        this.router.navigate(['/home']);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userPanelForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService
      .updateCurrentUserInfo(this.userPanelForm.value)
      .subscribe((a) => {
        this.router.navigate(['/home']);
      });
  }
}
