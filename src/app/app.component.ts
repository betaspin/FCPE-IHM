import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
const _ = require('lodash');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService ) { }

  logout(){
    this.authenticationService.logout();
  }
}
