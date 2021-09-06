import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SidebarComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent,
    TablesComponent
  ]
})
export class HarrypotterModule { }
