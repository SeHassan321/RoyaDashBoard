import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ComponentService } from "../../service/component.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  userId:any = localStorage.getItem("userId")
  Approve:any = true
    // form data for add hotel

  addHotelForm: FormGroup = new FormGroup({
    Name: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required]),
    Type: new FormControl(null, [Validators.required]),
    Price: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    UserId: new FormControl(null, [Validators.required]),
    ImagesFile: new FormControl(null, [Validators.required]),

  });
  constructor(public toastr: ToastrService, public _service: ComponentService) {

  }



  ngOnInit(): void {}

  // get image value
  maultimages: any = {};
  handelimage(e: any) {
    this.maultimages = e.target.files

    if(this.maultimages.length <= 4){
      for (let img of this.maultimages) {
        if (img.size > 500000) {
          {
            alert(`5KP أكبر من  ${img.name}  الصورة`);
          }
          this.addHotelForm.controls["image"].setValue(null);
        }

      }
    }
    else{
      alert('يجب ادخال اربع  صور فقط')
      this.addHotelForm.controls["image"].setValue(null);

    }
  }

  // submit your data

  handelSubmit(e: any) {
    if (this.maultimages != null) {
      let formData = new FormData();

      formData.append(
        "Name",
        this.addHotelForm.controls["Name"].value
      );
      formData.append(
        "Description",
        this.addHotelForm.controls["Description"].value
      );
      formData.append(
        "Type",
        this.addHotelForm.controls["Type"].value
      );
      formData.append("Price", this.addHotelForm.controls["Price"].value);
      formData.append("address", this.addHotelForm.controls["address"].value);
      formData.append("Approve", this.Approve);
      formData.append("UserId",this.userId );
      for(let img of this.maultimages)

        formData.append("ImagesFile",img);

      this._service.AddProduct(formData).subscribe((res) => {
        this.addHotelForm.reset();
        this.maultimages = null
        this.toastr.success("add success", "Add!");
      });
    }
  }

}
