import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichajeService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  //Enviar a postman o al back:
  enviarFichaje(tipo: string, fecha: Date, idUser: number, usuario: string): Observable<any> {
    // const fechaFormateada = this.formatearFecha(fecha);
    const datos = {
      body: `tipo: ${tipo}, idUser: ${idUser}, Usuario: ${usuario}, Fecha: ${fecha}`,
    };
  
    return this.http.post(this.url, datos, { 
      headers: { 'Content-Type': 'application/json' } 
    });
  }

  /*
  private formatearFecha(fecha: Date): string {
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const ano = fecha.getFullYear();

    return `${ano}/${mes}/${dia} ${horas}:${minutos}`;
  }*/
}
