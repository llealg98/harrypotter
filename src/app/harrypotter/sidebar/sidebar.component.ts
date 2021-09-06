import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private harrypotterService:HarrypotterService) { }

  filtrarArr( name:string = ''){
    this.harrypotterService.buscarMagos(name)
  }

}
