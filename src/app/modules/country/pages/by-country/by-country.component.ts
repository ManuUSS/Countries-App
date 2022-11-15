import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public term: string = '';

  constructor( private countryService:CountryService ) { }

  public search = () => {
    this.countryService.searchCountry( this.term )
      .subscribe( resp => {
        console.log( resp );
      });
  }

}
