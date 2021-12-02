import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { routing } from "./app.routing";





@NgModule({
  imports: [BrowserModule, ModelModule, CoreModule, routing],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
