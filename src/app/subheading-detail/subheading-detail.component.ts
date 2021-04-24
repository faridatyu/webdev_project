import { Component, OnInit } from '@angular/core';
import { Subheading } from '../interfaces/subheading';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';
import {SubheadingComponent} from '../subheading/subheading.component';

@Component({
  selector: 'app-subheading-details',
  templateUrl: './subheading-detail.component.html',
  styleUrls: ['./subheading-detail.component.css']
})
export class SubheadingDetailComponent implements OnInit {
  subheading: Subheading;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) { }

  ngOnInit(): void {
    this.getSubheading();
  }

  getSubheading(): void {
    const id = +this.route.snapshot.paramMap.get('subtopicId');
    this.apiService.getSubheadingBySubheadingId(id)
      .subscribe(subheading => this.subheading = subheading);
    this.subheading.recipe.replace('\n', '<br>');
  }

  save(): void {
    this.apiService.updateSubheading(this.subheading, this.subheading.id)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
