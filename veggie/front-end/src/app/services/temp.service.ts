import { Injectable } from '@angular/core';
import { Section } from '../interfaces/section';
import { Observable, of } from 'rxjs';
import { SECTIONS } from '../data/data-sections';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  sections = SECTIONS;

  constructor() { }

  getSections(): Observable<Section[]> {
    return of(this.sections);
  }
}
