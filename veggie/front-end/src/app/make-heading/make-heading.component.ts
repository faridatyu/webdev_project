import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Section } from '../interfaces/section';
import { Heading } from '../interfaces/heading';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-make-heading',
  templateUrl: './make-heading.component.html',
  styleUrls: ['./make-heading.component.css']
})
export class MakeHeadingComponent implements OnInit {
  constructor(private apiService: ApiService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    const section: number = +this.route.snapshot.paramMap.get('sectionId');
    this.apiService.addHeading({ section, name, description } as Heading, section)
      .subscribe(topic => {
        window.location.reload();
      });
  }
}
