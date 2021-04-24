import { Component, OnInit, Input } from '@angular/core';
import { Heading } from '../interfaces/heading';
import { ApiService } from '../services/api.service';
import { Subheading } from '../interfaces/subheading';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.css']
})
export class SubheadingComponent implements OnInit {
  @Input() heading: Heading;
  subheadings: Subheading[];
  showComponent = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSubheadings();
  }

  getSubheadings(): void {
    this.apiService.getSubheadingsByHeadingId(this.heading.id)
      .subscribe(subheadings => this.subheadings = subheadings);
  }

  showCreateComponent(): void {
    if (this.showComponent) {
      this.showComponent = false;
    }
    else {
      this.showComponent = true;
    }
  }

  delete(subheadingId): void {
    this.apiService.deleteSubheading(subheadingId).subscribe(res => {
      window.location.reload();
    });
  }
}
