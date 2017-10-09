import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {SerchBoxComponent} from './components/serch-box/serch-box.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SearchService} from "./services/search.service";
import {CComponent} from "./MINIµ/C";
import {FormComponent} from "./components/form/Form.component";
import {Ayoub} from "./directives/ayoub";
import { RowHoverDirective } from './directives/row-hover.directive';
import {TagDirective} from "./directives/tag";
import {TagsComponent} from "./directives/tags";
import { PostsComponent } from './components/posts/posts.component';
import {TpService} from "./services/tp.service";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'posts', component: PostsComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        DataTableComponent,
        SerchBoxComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        CComponent,
        FormComponent,
        Ayoub,
        RowHoverDirective,
        TagDirective,
        TagsComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [SearchService,TpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
