import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1';
    private usedFields = 'name,capital,flags,population,cca2';
    private params = new HttpParams().set( 'fields', this.usedFields );

    constructor( private http: HttpClient ) { }

    public searchCountry( term: string ):Observable<CountryResponse[]> {

        const url = `${ this.apiUrl }/name/${ term }`;
        return this.http.get<CountryResponse[]>( url, { params:this.params } );

    }

    public searchCapital( term: string ):Observable<CountryResponse[]> {
            
        const url = `${ this.apiUrl }/capital/${ term }`;
        return this.http.get<CountryResponse[]>( url, { params:this.params } );
    
    }

    public searchRegion( term: string ):Observable<CountryResponse[]> {
            
        const url = `${ this.apiUrl }/region/${ term }`;
        return this.http.get<CountryResponse[]>( url, { params:this.params } );
    
    }

    public getCountryByCode( id: string ):Observable<CountryResponse> {
        
        const url = `${ this.apiUrl }/alpha/${ id }`;
        return this.http.get<CountryResponse>( url );
    
    }

}