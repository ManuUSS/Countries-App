import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public term: string = '';
  public isError: boolean = false;
  public countries: CountryResponse[] = [];

  constructor( private countryService:CountryService ) { }

  public search = () => {
    this.isError = false;
    this.countryService.searchCountry( this.term )
      .subscribe({
        next: ( countries ) => {
          this.countries = countries;
          console.log( countries );
        },
        error: ( err ) => {
          this.isError = true;
          this.countries = [];
        }
      });
  }

}
