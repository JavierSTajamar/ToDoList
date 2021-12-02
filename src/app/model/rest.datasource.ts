import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, Observable, throwError } from "rxjs";

import { catchError } from "rxjs/operators";
import { Tarea } from "./tarea.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(private http: HttpClient,
    @Inject(REST_URL) private url: string) { }

  getData(): Observable<Tarea[]> {
    return this.sendRequest<Tarea[]>("GET", this.url);
  }
  saveTarea(tarea: Tarea): Observable<Tarea> {
    return this.sendRequest<Tarea>("POST", this.url, tarea);
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    return this.sendRequest<Tarea>("PUT", `${this.url}/${tarea.id}`, tarea);
  }

  deleteTarea(id: number): Observable<Tarea> {
    return this.sendRequest<Tarea>("DELETE", `${this.url}/${id}`);
  }
  private sendRequest<T>(verb: string, url: string, body?: Tarea): Observable<T> {
    return this.http.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        "Access-Key": "<secret>",
        "Application-Name": "ToDoList"
      })
    }).pipe(catchError((error: Response) =>
      throwError(`Network Error: ${error.statusText} (${error.status})`)));
  }
}
