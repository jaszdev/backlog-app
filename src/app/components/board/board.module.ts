import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadMapComponent } from './road-map/road-map.component';
import { ItemModule } from '../item/item.module';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    RoadMapComponent,
    NavigationBarComponent
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
