import { Component } from '@angular/core';
import { BannerService } from '../../../services/banner/banner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create.component.html',
  styleUrl: './banner-create.component.css'
})
export class BannerCreateComponent {
  selectedImage: File | null = null;

  constructor(private _bannerService: BannerService, private _router: Router) {}
test(){
  console.log('test')

}
  onFileChange(event: any) {
    alert('start')
    if (event.target.files && event.target.files.length) {
      this.selectedImage = event.target.files[0] as File;
      alert(this.selectedImage)
    }
  }

  onSubmit() {
    
    if (!this.selectedImage) {
      alert("Image file is missing");
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedImage, this.selectedImage.name);

        this._bannerService.postData(formData).subscribe(
      response => {
        this._router.navigate(['/dashboard/banner']);
      },
      error => {
        console.error('Server error:', error);
      }
    );
  }

      }
