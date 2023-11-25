// header-paysan.module.ts
import { NgModule } from '@angular/core';
import { HeaderPaysanComponent } from './header-paysan.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderPaysanComponent,
  ],
  imports: [
    CommonModule, // Assurez-vous que CommonModule est importé ici
    // ... autres modules
  ],
  exports: [
    HeaderPaysanComponent,
    
  ],
})
export class HeaderPaysanModule { }
