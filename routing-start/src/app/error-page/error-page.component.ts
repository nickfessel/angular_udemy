import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // only use the snapshot if you know the url won't change while the user has this component loaded.
    //this.errorMessage = this.route.snapshot.data["message"];

    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data["message"];
    });
  }
}
