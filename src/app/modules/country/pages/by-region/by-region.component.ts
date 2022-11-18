import { Component } from '@angular/core';

import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';
  public countries: CountryResponse[] = [];
  public placeholder: string = 'Busca una región...';

  constructor( private countryService:CountryService ) { }

  public search = ( toSearch:string ) => {
    this.countryService.searchRegion( toSearch )
      .subscribe({
        next: ( countries ) => {
          this.countries = countries;
          console.log( countries );
        },
        error: ( err ) => {
          this.countries = [];
          console.error( err );
        }
      });
  }

  public suggestions = ( term:string ) => {
  }

  public activateRegion( region:string ):void {
    if ( region === this.activeRegion ) { return; }
    this.activeRegion = region;
    this.countries = [];
    this.search( region );
  }

}
