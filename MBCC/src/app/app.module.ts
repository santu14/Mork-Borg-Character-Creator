import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterClassSelectionComponent } from './character-class-selection/character-class-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterClassSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
