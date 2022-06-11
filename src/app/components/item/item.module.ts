import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { UtilsModule } from '../utils/utils.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule
  ],
  exports:[
    ItemComponent,
    ItemFormComponent
  ]
})
export class ItemModule { }
