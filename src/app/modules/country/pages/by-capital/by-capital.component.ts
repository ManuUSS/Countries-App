import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {
  public term: string = '';
  public isError: boolean = false;
  public countries: CountryResponse[] = [];
  public placeholder: string = 'Busca una capital...';


  constructor( private countryService:CountryService ) { }

  public search = ( toSearch:string ) => {
    this.isError = false;
    this.term = toSearch;
    this.countryService.searchCapital( this.term )
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
