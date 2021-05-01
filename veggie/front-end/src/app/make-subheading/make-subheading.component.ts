import { Component, OnInit, Input } from '@angular/core';
import { Heading } from '../interfaces/heading';
import { Subheading } from '../interfaces/subheading';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-make-subheading',
  templateUrl: './make-subheading.component.html',
  styleUrls: ['./make-subheading.component.css']
})
export class MakeSubheadingComponent implements OnInit {
  @Input() curheading: Heading;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  add(name: string, description: string, recipe: string): void {
    name = name.trim();
    description = description.trim();
    recipe= recipe.trim();
    const heading: number = this.curheading.id;
    this.apiService.addSubheading({ heading, name, description, recipe} as Subheading, heading)
      .subscribe(top => {
        window.location.reload();
      });
  }
}
