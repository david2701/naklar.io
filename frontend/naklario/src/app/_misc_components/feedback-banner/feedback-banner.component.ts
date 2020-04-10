import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/_services";

@Component({
  selector: "app-feedback-banner",
  templateUrl: "./feedback-banner.component.html",
  styleUrls: ["./feedback-banner.component.scss"],
})
export class FeedbackBannerComponent implements OnInit {
  open: boolean;
  wasInside: boolean;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.open = false;
    this.wasInside = true;
    this.form = this.fb.group({
      text: ["", Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }

  onClick() {
    this.open = !this.open;
  }

  onClickOutside() {
    this.open = false;
  }

  onSubmit() {
    const data = {
      url: this.router.url,
      date: new Date().toISOString(),
      user: this.authenticationService.currentUserValue,
      loggedIn: this.authenticationService.isLoggedIn,
      text: this.f.text.value,
    };
    console.log(data);
    this.open = false;
  }
}
