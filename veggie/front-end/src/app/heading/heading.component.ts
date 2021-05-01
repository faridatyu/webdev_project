import { Component, OnInit, Input } from '@angular/core';
import { Heading} from '../interfaces/heading';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() heading: Heading;
  showSubheadings = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  showSubheadingsComponent(): void {
    if (this.showSubheadings) {
      this.showSubheadings = false;
    }
    else {
      this.showSubheadings = true;
    }
  }
  
  delete(headingId): void {
    this.apiService.deleteHeading(headingId)
      .subscribe(res => {
        window.location.reload();
      });
  }
}
