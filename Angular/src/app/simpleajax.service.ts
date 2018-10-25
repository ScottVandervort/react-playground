import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleAjaxModel } from './simpleajaxmodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimpleAjaxService {

  configUrl = 'assets/config.json';

  // Inject the HttpClient into the Service via the constructor.
  constructor( private http: HttpClient ) { }

  test() : Observable<SimpleAjaxModel[]> {
    //return this.http.get<SimpleAjaxModel[]>("http://localhost:62956/api/test/1");
    return this.http.get<SimpleAjaxModel[]>(environment.testUrl);
  }
}
