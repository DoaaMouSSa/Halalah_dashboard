import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  category = { arName: '', enName: '' };
  selectedImage: File | null = null;

  constructor(private _categoryService: CategoryService, private _router: Router) {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedImage = event.target.files[0] as File;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log("Submit button clicked");  // Debugging log

    if (!this.selectedImage) {
      console.log("Image file is missing");
      return;
    }

    const formData = new FormData();
    formData.append('arName', this.category.arName);
    formData.append('enName', this.category.enName);
    formData.append('image', this.selectedImage, this.selectedImage.name);

        this._categoryService.postData(formData).subscribe(
      response => {
        this._router.navigate(['/dashboard/category']);
      },
      error => {
        console.error('Server error:', error);
      }
    );
  }

      }
      
