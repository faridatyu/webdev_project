import { Injectable } from '@angular/core';
import { Heading} from '../interfaces/heading';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  private headingsUrl = 'api/headings';
  constructor(private http: HttpClient) { }
  getHeadings(): Observable<Heading[]> {
    return this.http.get<Heading[]>(this.headingsUrl);
  }
}
