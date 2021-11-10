import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { SharedModule } from '../shared/shared.module';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BrandListComponent, BrandCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]

})
export class BrandModule { }
