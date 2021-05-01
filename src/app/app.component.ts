import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  currentUser: User;
  logged = false;

}