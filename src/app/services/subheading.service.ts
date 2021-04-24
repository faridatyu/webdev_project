import { Injectable } from '@angular/core';
import { Subheading } from '../interfaces/subheading';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubheadingService {
  private subheadingsUrl = 'api/subheadings';


  constructor(private http: HttpClient) { }

  getSubheadings(): Observable<Subheading[]> {
    console.log(this.subheadingsUrl)
    return  this.http.get<Subheading[]>(this.subheadingsUrl);

  }
}
