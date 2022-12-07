import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';


import { RegisterComponent } from './register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SplitAtPipe } from '../split-at.pipe';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddProductComponent } from './addData/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './addData/product-details/product-details.component';
import { UsersComponent } from './users/users.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule


  ],
  declarations: [

    RegisterComponent,
    SplitAtPipe,
    SearchResultComponent,
    AddProductComponent,
    ProductsComponent,
    ProductDetailsComponent,
    UsersComponent,
    AcceptRequestComponent,
    BookingComponent


  ]
})
export class ComponentsModule { }
