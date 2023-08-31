import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageDbz } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormAddCharacterComponent } from './components/form-add-character/form-add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageDbz,
    ListComponent,
    FormAddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageDbz
  ]
})
export class DbzModule { }
