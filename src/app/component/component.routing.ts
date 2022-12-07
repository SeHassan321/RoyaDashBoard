import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../app/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AuthRegisterGuard } from '../../app/auth-register.guard';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddProductComponent } from './addData/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './addData/product-details/product-details.component';
import { UsersComponent } from './users/users.component';
import { BookingComponent } from './booking/booking.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';


export const ComponentsRoutes: Routes = [
	{

		path: '',
		children: [



			{
				path: 'products',canActivate:[AuthGuard],
				component: ProductsComponent
			},
			{
				path: 'users',canActivate:[AuthGuard],
				component: UsersComponent
			},

			{
				path: 'booking',canActivate:[AuthGuard],
				component: BookingComponent
			},
			{
				path: 'acceptRequest',canActivate:[AuthGuard],
				component: AcceptRequestComponent
			},
			{
				path: 'addProduct',canActivate:[AuthGuard],
				component: AddProductComponent
			},
			{
				path: 'productDetails/:id',canActivate:[AuthGuard],
				component: ProductDetailsComponent
			},
			{
				path: 'register',canActivate:[AuthRegisterGuard],
				component: RegisterComponent
			},
			{
				path: 'search/:result',canActivate:[AuthGuard],
				component: SearchResultComponent
			},

		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(ComponentsRoutes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
