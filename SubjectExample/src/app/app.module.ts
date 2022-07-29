import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
=======
import { AmanCompOneComponent } from './aman-comp-one/aman-comp-one.component';
import { AmanCompTwoComponent } from './aman-comp-two/aman-comp-two.component';
import { AmanCompThreeComponent } from './aman-comp-three/aman-comp-three.component';
import { AmanCompFourComponent } from './aman-comp-four/aman-comp-four.component';
>>>>>>> dc856eec8088c9fc662896313fed444a27383379

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
=======
    AmanCompOneComponent,
    AmanCompTwoComponent,
    AmanCompThreeComponent,
    AmanCompFourComponent
>>>>>>> dc856eec8088c9fc662896313fed444a27383379
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
