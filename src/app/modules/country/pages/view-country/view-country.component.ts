import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html'
})
export class ViewCountryComponent implements OnInit {

  public country!: CountryResponse;
  constructor( 
    private activatedRoute:ActivatedRoute, 
    private countryService:CountryService  
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByCode( id ) ),
        tap( console.log )
      )
      .subscribe( country => this.country = country[0] );
  }

}
