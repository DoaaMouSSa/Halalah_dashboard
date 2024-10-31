import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {

  categoryId!: number;
  categoryForm!: FormGroup;
  image: string = '';  // Declare a variable to store the image URL
  constructor(
    private fb: FormBuilder,
    private _categoryService: CategoryService,
    private _router: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      arName: ['', [Validators.required]],
      enName: [''],
    });
    
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id'); // Get the id from the route
    if (id) {
      this.categoryId = +id; // Safely convert the id to a number
      this.fillForm();
    } else {
      console.error('No ID found in the route.');
    }
  }

  fillForm() {
    this._categoryService.GetById(this.categoryId.toString()).subscribe(
      category => {
        console.log('Category data:', category.payload); // Log the returned category
        if (category) {
          this.categoryForm.patchValue({
            arName: category.payload.arName,
            enName: category.payload.enName,
          });       
          this.image = category.payload.image;

        } else {
          console.error('No data returned for the given ID');
        }
      },
      error => {
        console.error('Error in GetById service:', error); // Log any service error
      }
    );
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      this._categoryService.updateData(this.categoryId.toString(), this.categoryForm.value).subscribe(
        response => {
          console.log('Category updated successfully:', response);
          this.router.navigate(['/dashboard/category/index']);
        },
        error => {
          console.error('Error updating Category:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}

