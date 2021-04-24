import { Component, OnInit } from '@angular/core';
import {recipes} from '../recipes';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe = recipes;
  constructor() { }

  ngOnInit(): void {
  }

}