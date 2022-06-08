import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadMapComponent } from './road-map/road-map.component';



@NgModule({
  declarations: [
    RoadMapComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoadMapComponent
  ]
})
export class BoardModule { }
