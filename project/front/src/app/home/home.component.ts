import { Component, OnInit } from '@angular/core';
import { SectionService } from '../services/section.service';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections: Section[];

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    this.sectionService.getSections().subscribe(sections => this.sections = sections);
  }

}
