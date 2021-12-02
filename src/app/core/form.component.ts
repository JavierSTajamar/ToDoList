import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Model } from "../model/repository.model";
import { Tarea } from "../model/tarea.model";

@Component({
  selector: "tdlForm",
  templateUrl: "form.component.html"
})
export class FormComponent {
  tarea: Tarea = new Tarea();
  constructor(private model: Model, activeRoute: ActivatedRoute, private router: Router) {
    activeRoute.params.subscribe(params => {
      let id = params["id"];
      if (id != null) {
        Object.assign(this.tarea, this.model.getTarea(id) || new Tarea());
      }
    })
  }
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    if (form.valid) {
      this.tarea.estado = "Pendiente";
      this.model.saveTarea(this.tarea);
      this.formSubmitted = true;
      this.router.navigateByUrl("/");
    }
  }
  resetForm() {
    this.tarea = new Tarea();
  }
}
