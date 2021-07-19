import { Injectable } from '@angular/core';
import { Persona } from '../../models/Persona';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'http://localhost:8080/api/personas'
  private url2 = 'http://localhost:8080/api/persona'
  constructor(private http:HttpClient) { }
  listarPersonas(){
   return this.http.get<Persona[]>(this.url);
  }
  getPersona(com:string){
    return this.http.get<Persona[]>(`${this.url2}/${com}`)
  }
}
