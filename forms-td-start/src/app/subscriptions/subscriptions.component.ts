import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('f', {static: false}) signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultQuestion = 'Advanced';
  user = {
    mail: '',
    subscription: '',
    password: ''
  }
  submitted = false

  onSubmit() {
    this.submitted = true;
    this.user.mail = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    this.signupForm.reset();
  }

}
