import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heading } from '../interfaces/heading';
import { Section } from '../interfaces/section';
import { Subheading } from '../interfaces/subheading';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { LoginResponse } from '../interfaces/loginresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeadingsBySectionId(sectionId): Observable<Heading[]> {
    const url = `${this.baseUrl}/sections/${sectionId}/headings/`;
    return this.http.get<Heading[]>(url);
  }

  getSectionBySectionId(sectionId): Observable<Section> {
    const url = `${this.baseUrl}/sections/${sectionId}/`;
    return this.http.get<Section>(url);
  }

  getHeadingByHeadingId(headingId): Observable<Heading> {
    const url = `${this.baseUrl}/headings/${headingId}/edit/`;
    return this.http.get<Heading>(url);
  }

  getSubheadingsByHeadingId(headingId): Observable<Subheading[]> {
    const url = `${this.baseUrl}/headings/${headingId}/subheadings/`;
    return this.http.get<Subheading[]>(url);
  }

  getSubheadingBySubheadingId(subheadingId): Observable<Subheading> {
    const url = `${this.baseUrl}/subheadings/${subheadingId}/edit/`;
    return this.http.get<Subheading>(url);
  }

  updateSubheading(subheading: Subheading, subheadingId): Observable<Subheading> {
    const url = `${this.baseUrl}/subheadings/${subheadingId}/edit/`;
    return this.http.put<Subheading>(url, subheading, this.httpOptions);
  }

  updateHeading(heading: Heading, headingId): Observable<Heading> {
    const url = `${this.baseUrl}/headings/${headingId}/edit/`;
    return this.http.put<Heading>(url, heading, this.httpOptions);
  }

  addHeading(heading: Heading, sectionId): Observable<Heading> {
    const url = `${this.baseUrl}/sections/${sectionId}/topics/`;
    return this.http.post<Heading>(url, heading, this.httpOptions);
  }

  addSubheading(subheading: Subheading,headingId): Observable<Subheading> {
    const url = `${this.baseUrl}/headings/${headingId}/subheadings/`;
    return this.http.post<Subheading>(url, subheading, this.httpOptions);
  }

  deleteSubheading(subheadingId: number): Observable<any> {
    const url = `${this.baseUrl}/subheadings/${subheadingId}/edit/`;
    return this.http.delete<any>(url, this.httpOptions);
  }

  deleteHeading(headingId: number): Observable<any> {
    const url = `${this.baseUrl}/headings/${headingId}/edit/`;
    return this.http.delete<any>(url, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/signup/`;
    return this.http.post<User>(url, user, this.httpOptions);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login/`, {
      username,
      password
    });
  }

  getUser(username): Observable<User> {
    const url = `${this.baseUrl}/users/${username}/`;
    return this.http.get<User>(url);
  }

  getSubheadings(): Observable<Subheading[]> {
    const url = `${this.baseUrl}/subheadings/`;
    return this.http.get<Subheading[]>(url);
  }
}
