import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component } from "@angular/core";
import { Observable } from "rxjs";


@Component({
  selector: "tdlPrueba",
  templateUrl: "prueba.component.html",
})
export class PruebaComponent {
  obs: any;
  ngOnInit() {
    this.obs = Observable.create(function (observer) {
      observer.next("Hola Mundo");
      observer.next("Hola Mundo2");
      //observer.error("Error 01");
      observer.next("Hola Mundo3");
      observer.complete();

    });
    this.obs.subscribe(x=>console.log(x));
    
  }
  



 
}
