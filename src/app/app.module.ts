import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { ExtraLifeApiService } from './elapi/extra-life-api.service';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TeampageComponent } from './teampage/teampage.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserpageComponent } from './userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TeampageComponent,
    UserCardComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.baseUrl }],
  bootstrap: [AppComponent]
})

export class AppModule {

}
