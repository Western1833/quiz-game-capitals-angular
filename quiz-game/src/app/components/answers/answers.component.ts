import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/interfaces';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { SharedCountryIdService } from 'src/app/services/shared-country-id.service';
import { randomNumber, arrayShuffle } from 'src/app/utils';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  countryId: number = 0;
  arrayWithAllCountries: Countries[] = [];
  arrayWithCoutriesForAnswers: string[] = [];
  correctAnswer: string = '';
  randomCapital: string = '';
  threeRandomCapitals: number[] = [];
  randomNumberForRandomCapital: number = 0;

  constructor(private sharedService: SharedCountryIdService, private getAllCountries: GetCountriesService) { }

  ngOnInit(): void {
    this.sharedService.countryId$.subscribe(id => {
      this.countryId = id;
    });
    this.getAllCountries.getAllCountries().subscribe(res => {
      this.arrayWithAllCountries = res;
      this.correctAnswer = this.arrayWithAllCountries[this.countryId].capital;
      this.arrayWithCoutriesForAnswers.push(this.correctAnswer);
      for (let i = 0; i < 3; i++) {
        this.formingTheAnswersArray();
      }
      arrayShuffle(this.arrayWithCoutriesForAnswers);
    });
  }

  formingTheAnswersArray() {
    this.randomNumberForRandomCapital = randomNumber(32);
    if (this.countryId !== this.randomNumberForRandomCapital) {
      this.threeRandomCapitals.push(this.randomNumberForRandomCapital);
      this.randomNumberForRandomCapital = 0;
    } else {
      if ((this.randomNumberForRandomCapital + 1) > 32) {
        this.threeRandomCapitals.push(this.randomNumberForRandomCapital);
        this.randomNumberForRandomCapital - 1;
        console.log('error1')
      } else if ((this.randomNumberForRandomCapital - 1) === 0) {
        this.threeRandomCapitals.push(this.randomNumberForRandomCapital);
        this.randomNumberForRandomCapital + 1;
        console.log('error2')
      }

    }
  }

  checkAnswer(clickedAnswer: string | null) {
    console.log(clickedAnswer);
  }
}
