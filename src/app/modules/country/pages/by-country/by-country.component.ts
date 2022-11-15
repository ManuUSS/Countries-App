import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public term: string = '';
  public isError: boolean = false;

  constructor( private countryService:CountryService ) { }

  public search = () => {
    this.isError = false;
    this.countryService.searchCountry( this.term )
      .subscribe({
        next: ( resp ) => {
          console.log(resp);
        },
        error: ( err ) => {
          this.isError = true;
          console.log('Error: ', err);
        }
      });
  }

}
