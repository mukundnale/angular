import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetbackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetbackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
