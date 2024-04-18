import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { randomNumber } from 'src/app/utils';
import { Countries } from 'src/app/interfaces';
import { SharedCountryIdService } from 'src/app/services/shared-country-id.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  countries: Countries[] = [];
  countryId: number = 0;
  currentCountry: string = '';

  constructor(private countriesService: GetCountriesService, private sharedService: SharedCountryIdService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(res => {
      this.countries = res;
      this.countryId = randomNumber(7);
      this.currentCountry = this.countries[this.countryId].country;
      this.sendCountryId();
    });
  }

  sendCountryId() {
    this.sharedService.getCountryId(this.countryId);
  }
}
