import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmanCompOneComponent } from './aman-comp-one/aman-comp-one.component';
import { AmanCompTwoComponent } from './aman-comp-two/aman-comp-two.component';
import { AmanCompThreeComponent } from './aman-comp-three/aman-comp-three.component';
import { AmanCompFourComponent } from './aman-comp-four/aman-comp-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AmanCompOneComponent,
    AmanCompTwoComponent,
    AmanCompThreeComponent,
    AmanCompFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
