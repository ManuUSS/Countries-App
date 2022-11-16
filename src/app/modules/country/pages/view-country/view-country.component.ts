import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html'
})
export class ViewCountryComponent implements OnInit {

  constructor( 
    private activatedRoute:ActivatedRoute, 
    private countryService:CountryService  
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByCode( id ) )
      )
      .subscribe( response => console.log( response ) );
  }

}
