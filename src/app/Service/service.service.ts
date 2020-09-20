import { Injectable } from '@angular/core';
import { Persona } from '../Persona/Modelo/Persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Conexión con el backend
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/ProyectoAngular2/personas';

  // Obtengo todos los datos de la Url
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

}
