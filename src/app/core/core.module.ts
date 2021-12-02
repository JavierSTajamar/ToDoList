import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { FormComponent } from "./form.component";
import { PruebaComponent } from "./prueba.component";

import { TableComponent } from "./table.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  declarations: [TableComponent, FormComponent,PruebaComponent],
  exports: [TableComponent, FormComponent, ModelModule, PruebaComponent]

})

export class CoreModule { }
