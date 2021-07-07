import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Libreria } from '../modelo/libreria'
@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  libreriaLista: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getLibro()
  {
    return this.libreriaLista = this.firebase.list('libreria');
  }

  insertLibro(libro: Libreria)
  {
    this.libreriaLista.push({
      title: libro.title,
      year: libro.year,
      autor: libro.autor
    });
  }

}
