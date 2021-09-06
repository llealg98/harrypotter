import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  
  obtenerEdad( fecha:string){
    let aux:string[] = [];
    let dateOfBirth:number;
    let yearAct = new Date().getFullYear();

    aux = fecha.split('-');
    dateOfBirth = parseInt(aux[2]);
    
    return  yearAct - dateOfBirth;
  }
  get arrPersonajes(){
    return this.harrypotterService.personajes;
  }
  constructor( private harrypotterService:HarrypotterService) { }
}
