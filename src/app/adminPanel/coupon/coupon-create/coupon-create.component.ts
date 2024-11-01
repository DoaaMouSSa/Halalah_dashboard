import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../../services/coupon/coupon.service';
import { CategoryService } from '../../../services/category/category.service';
import { StoreService } from '../../../services/store/store.service';
import { Router } from 'express';
interface Category {
  id: number;  // Adjust the type as needed
  enName: string; // Adjust the type as needed
}

interface Store {
  id: number;  // Adjust the type as needed
  enName: string; // Adjust the type as needed
}
@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrl: './coupon-create.component.css'
})
export class CouponCreateComponent implements OnInit{
  stores: any[] = [];  // Array to hold store data
  categories: any[] = [];  // Array to hold store data
  coupon = {
    code: '',
    discount: 0,
    expiry_date: new Date().toISOString(),
    isActive: false,
    link: '',
    storeId: 0,
    categoryId: 0
  };
  constructor(private _storeService:StoreService,
    private _categoryService:CategoryService,
    private _couponService:CouponService
  ) {}
  ngOnInit() {
    this.loadStores();
    this.loadCategories();
  }

  loadStores() {
    this._storeService.getData(1, 1000).subscribe(data => {
      this.stores = data.payload;
    });
  }
  loadCategories() {
    this._categoryService.getData().subscribe(data => {
      this.categories = data.payload;
    });
  }
  onSubmit() {
    this._couponService.postData(this.coupon).subscribe(
      response => {
        console.log('Coupon sent successfully:', response);
      },
      error => {
        console.error('Error sending coupon:', error);
      }
    );
  }

      }

