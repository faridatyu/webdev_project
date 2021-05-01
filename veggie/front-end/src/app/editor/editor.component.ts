import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Section } from '../interfaces/section';
import { ApiService } from '../services/api.service';
import { Heading } from '../interfaces/heading';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  sectionId: number;
  section: Section;
  headings: Heading[];
  showComponent = false;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSectionId();
  }

  getSectionId(): void {
    const id = +this.route.snapshot.paramMap.get('sectionId');
    this.sectionId = id;
    this.apiService.getSectionBySectionId(id)
      .subscribe(section => this.section = section);
    this.apiService.getHeadingsBySectionId(id)
      .subscribe(headings => this.headings = headings);
  }

  showCreateComponent(): void {
    if (this.showComponent) {
      this.showComponent = false;
    }
    else {
      this.showComponent = true;
    }
  }
}
