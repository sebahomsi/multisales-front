import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandModule } from './brand/brand.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrandCreateComponent } from './brand/brand-create/brand-create.component';


const routes: Routes = [
  { path: 'brands', component: BrandListComponent },
  { path: 'brands/create', component: BrandCreateComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrandModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
