import { Component, OnInit } from '@angular/core';
import { data } from '../jsondata';

@Component({
  selector: 'app-student-score',
  templateUrl: './student-score.component.html',
  styleUrls: ['./student-score.component.scss']
})
export class StudentScoreComponent implements OnInit {
  studentScores;
  constructor() { }

  ngOnInit(): void {
    const unprocessedData = data;
    let highestScore = 0;
    unprocessedData.forEach((row: any) => {
      let total = 0;
      row.status = 'Pass';
      for (const subject in row.marks) {
        if (row.marks.hasOwnProperty(subject)) {
          const marks = +row.marks[subject];
          total = total + marks;
          if (marks < 20) {
            row.status = 'Fail';
          }
        }
      }
      row.total = total;
      if (total > highestScore) {
        highestScore = total;
      }
    });
    unprocessedData.forEach((row: any) => {
      if (row.total === highestScore && row.status !== 'Fail') {
        row.status = 'Topper';
      }
    });
    unprocessedData.sort((a, b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
    this.studentScores = unprocessedData;
  }

}
