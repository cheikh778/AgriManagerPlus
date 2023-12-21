import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.scss']
})
export class CreatePublicationComponent implements OnInit {
  status = false;

  addToggle()
  {
    this.status = !this.status;
  }
    ngOnInit() {

    }

  selectedImage!: File;
  imageUrl: string | undefined;

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      this.previewImage();
    }
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedImage);
  }



  }




