import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleajaxService {

  // Inject the HttpClient into the Service via the constructor.
  constructor( private http: HttpClient ) { 


  }
}
