import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './Plantas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent],
  exports: [PlantasComponent]
})
export class PlantasModule { }
