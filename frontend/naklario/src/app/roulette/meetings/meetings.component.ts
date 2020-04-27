import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/_services";
import { Router } from "@angular/router";

@Component({
  selector: "roulette-meetings",
  templateUrl: "./meetings.component.html",
  styleUrls: ["./meetings.component.scss"],
})
export class MeetingsComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
}
