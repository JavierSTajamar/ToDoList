import { Component, Inject, inject } from "@angular/core";
import { Tarea } from "../model/tarea.model";
import { Model } from "../model/repository.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tdlTable",
  templateUrl: "table.component.html"
})
export class TableComponent {
  estado : string = "";
  constructor(private model: Model, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.estado = params["estado"] || null;
    })
  }

  getTarea(key: number): Tarea {
    return this.model.getTarea(key);
  }
  getTareas(): Tarea[] {
    return this.model.getTareas().filter(t => this.estado == null || t.estado == this.estado);
  }
  deleteTarea(key: any) {
    this.model.deleteTarea(key);
  }
  createTarea(tarea: Tarea) {
    this.model.saveTarea(tarea);
  }
  get estados(): string[] {
    return this.model.getTareas()
      .map(t => <string>t.estado)
      .filter((estado, index, array) => array.indexOf(estado) == index);
  }
  updateTarea(tarea: Tarea) {
    if (tarea.estado == "Pendiente") {
      tarea.estado = "En Proceso";
    } else {
      tarea.estado = "Completado";
    }
  }
}
