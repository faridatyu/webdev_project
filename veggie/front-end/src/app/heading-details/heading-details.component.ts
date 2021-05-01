import { Component, OnInit } from '@angular/core';
import { Heading } from '../interfaces/heading';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-heading-details',
  templateUrl: './heading-details.component.html',
  styleUrls: ['./heading-details.component.css']
})
export class HeadingDetailsComponent implements OnInit {
  heading: Heading;

  constructor( private route: ActivatedRoute,
               private apiService: ApiService,
               private location: Location) { }

  ngOnInit(): void {
    this.getHeading();
  }

  getHeading(): void {
    const id = +this.route.snapshot.paramMap.get('headingId');
    this.apiService.getHeadingByHeadingId(id)
      .subscribe(heading => this.heading = heading);
  }

  save(): void {
    this.apiService.updateHeading(this.heading, this.heading.id)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
