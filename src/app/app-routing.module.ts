import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './adminPanel/category/category-create/category-create.component';
import { MainComponent } from './adminPanel/main/main.component';
import { DashboardComponent } from './adminPanel/dashboard/dashboard.component';
import { CategoryIndexComponent } from './adminPanel/category/category-index/category-index.component';
import { CategoryEditComponent } from './adminPanel/category/category-edit/category-edit.component';
import { StoreIndexComponent } from './adminPanel/store/store-index/store-index.component';
import { StoreCreateComponent } from './adminPanel/store/store-create/store-create.component';
import { StoreEditComponent } from './adminPanel/store/store-edit/store-edit.component';
import { BannerIndexComponent } from './adminPanel/banner/banner-index/banner-index.component';
import { BannerCreateComponent } from './adminPanel/banner/banner-create/banner-create.component';
import { BannerEditComponent } from './adminPanel/banner/banner-edit/banner-edit.component';
import { CouponIndexComponent } from './adminPanel/coupon/coupon-index/coupon-index.component';
import { CouponCreateComponent } from './adminPanel/coupon/coupon-create/coupon-create.component';
import { CouponEditComponent } from './adminPanel/coupon/coupon-edit/coupon-edit.component';

const routes: Routes = [
 { path: '', component:MainComponent,children:[
    { path: '', redirectTo: '/dashboard',pathMatch:'full' },
      { path: 'dashboard', component: DashboardComponent },
     { path: 'dashboard/category', component: CategoryIndexComponent },
     { path: 'dashboard/category/create', component: CategoryCreateComponent },
     { path: 'dashboard/category/edit/:id', component: CategoryEditComponent },
     { path: 'dashboard/store', component: StoreIndexComponent },
     { path: 'dashboard/store/create', component: StoreCreateComponent },
     { path: 'dashboard/store/edit/:id', component: StoreEditComponent },
     { path: 'dashboard/coupon', component: CouponIndexComponent },
     { path: 'dashboard/coupon/create', component: CouponCreateComponent },
     { path: 'dashboard/coupon/edit/:id', component: CouponEditComponent },
//     { path: 'dashboard/offer', component: OfferIndexComponent },
//     { path: 'dashboard/offer/create', component: OfferCreateComponent },
//     { path: 'dashboard/offer/edit/:id', component: OfferEditComponent },
     { path: 'dashboard/banner', component :BannerIndexComponent},
     { path: 'dashboard/banner/create', component: BannerCreateComponent },
     { path: 'dashboard/banner/edit/:id', component: BannerEditComponent },
//   ] },

// { path: 'login', component: LoginComponent },
// { path: 'register', component: RegisterComponent},
// { path: '**', component: NotFoundComponent },
] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
