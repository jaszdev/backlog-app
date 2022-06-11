import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadMapComponent } from './road-map/road-map.component';
import { ItemModule } from '../item/item.module';

@NgModule({
  declarations: [
    RoadMapComponent
  ],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [
    RoadMapComponent
  ]
})
export class BoardModule { }
