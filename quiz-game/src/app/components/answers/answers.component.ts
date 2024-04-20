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
  checkIfAnswerIsCorrect: boolean = false;
  selectedOption: string = '';

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
    let randomCapital: string = '';
    let randomCapitalIndex: number = 0;
  
    do {
      randomCapitalIndex = randomNumber(32);
      randomCapital = this.arrayWithAllCountries[randomCapitalIndex].capital;
    } while (this.arrayWithCoutriesForAnswers.includes(randomCapital) || this.countryId === randomCapitalIndex);
  
    this.arrayWithCoutriesForAnswers.push(randomCapital);
  }

  checkAnswer(clickedAnswer: string | null, selectedOption: string) {
    this.selectedOption = selectedOption;
    
    if(clickedAnswer === this.correctAnswer){
      this.checkIfAnswerIsCorrect = true;
    }else{
      this.checkIfAnswerIsCorrect = false;
    }
  }
}
