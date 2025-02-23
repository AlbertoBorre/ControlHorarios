import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FichajeService } from '../services/fichaje.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonicModule, CommonModule],
})
export class HomePage {
  
  registros: { tipo: string; fecha: Date; idUser: number; usuario: string}[] = [];
  isEntrada = true;
  idUser = 1;
  usuario = "Alberto";

  constructor(private fichajeService: FichajeService) {}

  //Se crea un nuevo registro al principio, se invierte la flag y se usa el servicio para enviar a postman:
  fichar() {
    const nuevoRegistro = {
      tipo: this.isEntrada ? "Entrada" : "Salida",
      fecha: new Date(),
      idUser: this.idUser,
      usuario: this.usuario
    };
    this.registros.unshift(nuevoRegistro);
    this.isEntrada = !this.isEntrada;

    this.fichajeService.enviarFichaje(nuevoRegistro.tipo, nuevoRegistro.fecha, nuevoRegistro.idUser, nuevoRegistro.usuario).subscribe({
      next: () => {
        console.log("Enviado");
      },
      error: (error) => {
        console.log("Error: ", error);
      }
    });
  }

  logout() {
  }

}
