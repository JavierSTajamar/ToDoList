import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { PruebaComponent } from "./core/prueba.component";
/*import { NotFoundComponent } from "./core/notFound.component";*/



const routes: Routes = [
  
  { path: "form", component: FormComponent },
  { path: "does", redirectTo: "/form/create", pathMatch: "prefix" },
  { path: "prueba", component: PruebaComponent },

  { path: "table/:estado", component: TableComponent },
  { path: "table", component: TableComponent },
  { path: "", redirectTo: "/table", pathMatch: "full" },
  
]

export const routing = RouterModule.forRoot(routes);
