import { Component } from '@angular/core';

import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent {

  public term: string = '';
  public isError: boolean = false;
  public countries: CountryResponse[] = [];
  public placeholder: string = 'Busca una región...';

  constructor( private countryService:CountryService ) { }

  public search = ( toSearch:string ) => {
    this.isError = false;
    this.term = toSearch;
    this.countryService.searchRegion( this.term )
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
  }

}
