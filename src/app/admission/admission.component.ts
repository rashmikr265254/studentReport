import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {
  percentage = '';
  year = '';
  class = '';
  last = '';
  name = '';
  isBtnDisable: boolean;
  constructor() { }

  ngOnInit(): void {
    this.validateForm();
  }

  validateForm() {
    const isNameValid = !/[^a-z]/i.test(this.name) && this.name.length < 21 && this.name.length > 0;
    const lastValid = !/[^a-z]/i.test(this.last) && this.last.length < 21 && this.last.length > 0;
    const yearValid = (this.year + '').length === 4 && /^\d+$/.test(this.year) && +this.year < 2018;
    const percentageValid = /^\d+$/.test(this.percentage) && (this.percentage + '').length > 0;
    const classValid = (this.class + '').length > 0;
    this.isBtnDisable = !classValid || !isNameValid || !lastValid || !yearValid || !percentageValid;
  }
}
