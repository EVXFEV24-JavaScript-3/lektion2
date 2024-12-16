import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './exercises/one/one.component';
import { TwoComponent } from './exercises/two/two.component';
import { ThreeComponent } from './exercises/three/three.component';
import { FourComponent } from './exercises/four/four.component';
import { FiveComponent } from './exercises/five/five.component';
import { SixComponent } from './exercises/six/six.component';
import { SevenComponent } from './exercises/seven/seven.component';
import { EightComponent } from './exercises/eight/eight.component';
import { MyButtonComponent } from './my-button/my-button.component';

@NgModule({
  declarations: [AppComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent, SixComponent, SevenComponent, EightComponent, MyButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
