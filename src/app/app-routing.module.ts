import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './modules/country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './modules/country/pages/by-country/by-country.component';
import { ByRegionComponent } from './modules/country/pages/by-region/by-region.component';
import { ViewCountryComponent } from './modules/country/pages/view-country/view-country.component';

const routes:Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ByCountryComponent,
    },
    {
        path: 'region',
        component: ByRegionComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: ViewCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

 }