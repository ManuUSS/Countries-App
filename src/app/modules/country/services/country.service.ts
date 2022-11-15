import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor( private http: HttpClient ) { }

    searchCountry( term: string ):Observable<CountryResponse[]> {

        const url = `${ this.apiUrl }/name/${ term }`;
        return this.http.get<CountryResponse[]>( url );

    }
}