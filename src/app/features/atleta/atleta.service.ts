import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { Atleta } from 'src/app/model/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  listaAtleti:Atleta[] = [
    {id:1,nome:'Usain',cognome:"Bolt",inAttivita:false,dataUltimaGara:new Date("2017-4-12"),numeroMedaglieVinte:20},
    {id:2,nome:'Marcel',cognome:"Jacobs",inAttivita:true,dataUltimaGara:new Date("2023-5-31"),numeroMedaglieVinte:6},
    {id:3,nome:'Filippo',cognome:"Tortu",inAttivita:true,dataUltimaGara:new Date("2023-1-21"),numeroMedaglieVinte:4}
  ]

  listAll(): Observable<Atleta[]> {
    return of(this.listaAtleti);
  }

  findById(id: number): Observable<Atleta> {
    return of(this.listaAtleti.find(item => item.id === id)).pipe(
      filter((atleta: Atleta | undefined): atleta is Atleta => atleta !== undefined)
    );
  }

  // stessa logica
  create(atletaInput: Atleta): Observable<Atleta> {
    const newId: number = Math.max.apply(Math, this.listaAtleti.map(atletaItem => atletaItem.id ? atletaItem.id : 1));
    atletaInput.id = newId + 1;
    this.listaAtleti.push(atletaInput);
    return of(atletaInput);
  }

}
