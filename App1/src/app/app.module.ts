import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HideShowComponentComponent} from './hide-show-component/hide-show-component.component';
import {SearchComponentComponent} from './search-component/search-component.component';
import {DataTableComponent} from './data-table/data-table.component'
import {RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponentComponent} from "./home-component/home-component.component";

const appRoutes = [
    {path:"",component:HomeComponentComponent},
    {path:"contact",component:ContactComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HideShowComponentComponent,
        SearchComponentComponent,
        DataTableComponent,
        HomeComponentComponent,
        ContactComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)

    ],
    providers: [],
    bootstrap: [AppComponent, HideShowComponentComponent]
})
export class AppModule {
}
