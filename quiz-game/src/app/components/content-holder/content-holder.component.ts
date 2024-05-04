import { Component } from '@angular/core';

@Component({
  selector: 'app-content-holder',
  templateUrl: './content-holder.component.html',
  styleUrls: ['./content-holder.component.css']
})
export class ContentHolderComponent {
  countries: {} = {};
  count: string | null = '';

  ngOnInit() {
    this.checkCorrectAnswers(); // Call checkCorrectAnswers() when component initializes
  }

  checkCorrectAnswers() {
    this.count = localStorage.getItem('count');
  }
}
