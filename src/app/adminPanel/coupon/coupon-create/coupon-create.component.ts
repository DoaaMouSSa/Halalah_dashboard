import { Component } from '@angular/core';
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
export class CouponCreateComponent {
  constructor() {}


      }

