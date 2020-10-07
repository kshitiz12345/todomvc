import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ButtonComponent } from './components/button/button.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    InputBoxComponent,
    ButtonComponent,
    DataListComponent,
    DataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
