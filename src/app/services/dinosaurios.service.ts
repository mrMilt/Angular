import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {

  dinosaurios:any=[];
  constructor(private http: HttpClient) { 
    this.cargarDinosaurios();
  }

  cargarDinosaurios() {
    this.http.get('assets/data/dinosaurios.json')
      .subscribe(respuesta=>{
        this.dinosaurios = respuesta['dinosaurios'];
        console.log(this.dinosaurios);
      });
  }
}
