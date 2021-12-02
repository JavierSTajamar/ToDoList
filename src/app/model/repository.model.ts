import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tarea } from "./tarea.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
  private tareas: Tarea[] = new Array<Tarea>();
  private locator = (t: Tarea, id: number) => t.id == id;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getData().subscribe(data => this.tareas = data);
  }
  getTareas(): Tarea[] {
    return this.tareas;
  }

  getTarea(id: number): Tarea {
    return <Tarea>this.tareas.find(t => this.locator(t, id));
  }
  saveTarea(tarea: Tarea) {
    if (tarea.id == 0 || tarea.id == null) {
      this.dataSource.saveTarea(tarea)
        .subscribe(t => this.tareas.push(t));
    } else {
      this.dataSource.updateTarea(tarea).subscribe(p => {
        let index = this.tareas
          .findIndex(item => this.locator(item, <number>p.id));
        this.tareas.splice(index, 1, p);
      });
    }
  }
  deleteTarea(id: number) {
    this.dataSource.deleteTarea(id).subscribe(() => {
      let index = this.tareas.findIndex(p => this.locator(p, id));
      if (index > -1) {
        this.tareas.splice(index, 1);
      }
    })
  }
}
