import { Component, OnInit } from '@angular/core';
import { data } from './jsondata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  studentScores;

  ngOnInit(): void {
    
  }
}
