import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      .country-nav-link {
        color: #2a9d8f;
      }

      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  public term: string = '';
  public isError: boolean = false;
  public countries: CountryResponse[] = [];
  public countriesSuggest: CountryResponse[] = [];
  public showSuggestions: boolean = false;
  public placeholder: string = 'Busca un país...';

  constructor( private countryService:CountryService ) { }

  public search = ( toSearch:string ) => {
    this.isError = false;
    this.term = toSearch;
    this.showSuggestions = false;
    this.countryService.searchCountry( this.term )
      .subscribe({
        next: ( countries ) => {
          this.countries = countries;
          console.log( countries );
        },
        error: ( err ) => {
          this.isError = true;
          this.countries = [];
          console.error( err );
        }
      });
  }

  public suggestions = ( term:string ) => {
    this.isError = false;
    this.term = term;
    this.showSuggestions = true;
    this.countryService.searchCountry( term )
      .subscribe({
        next: ( countries ) => {
          this.countriesSuggest = countries.splice(0, 5);
          console.log( countries );
        },
        error: ( err ) => {
          this.countriesSuggest = [];
          console.error( err );
        }
      });
  }

}
