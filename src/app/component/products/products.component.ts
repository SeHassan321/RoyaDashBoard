import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { log } from 'console';
import { ToastrService } from "ngx-toastr";
import { ComponentService } from "../service/component.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isLoding: boolean = true;
  productData: any[any] = [];
  totelLenght:any;
  Page:number = 1;

  constructor(
    public _ComponentService: ComponentService,
    public toastr: ToastrService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.GetAllProduct();


  }

  // get all data of hotel
  GetAllProduct() {
    this._ComponentService.GetAllProductWithStatusTrue().subscribe(
      (res) => {
        this.productData = res;
        this.totelLenght = res.length
      console.log(res);


      },
      (err) => {},
      () => {
        this.isLoding = false;
      }
    );
  }

  pageChanged(e:any){
    this.Page = e
    this.GetAllProduct()
  }

  // get all data by search
  // search input
  SearchForm: FormGroup = new FormGroup({
    name: new FormControl(null),
  });

  searchval() {
    this._Router.navigate([
      '/component/search',
      this.SearchForm.controls['name'].value,
    ]);
  }

  // delete city
  deleteProduct(id: any) {
    this._ComponentService.deleteProduct(id).subscribe(
      (res) => {

          this.GetAllProduct();




      },
      (err) => {},
      () => {}
      );
      this.toastr.success("deleted success", "deleted!");
  }
  // get id to make update and delete
  productIdBeforDeleted: any;
  Productdetailes: any;
  nameOFProductYouWillDelete:any;
  getId(id: any,nameOFProductYouWillDelete:any) {
this.nameOFProductYouWillDelete = nameOFProductYouWillDelete;

    this.productIdBeforDeleted = id;
    // get hotel data
    this._ComponentService
      .GetProductById(this.productIdBeforDeleted)
      .subscribe((res) => {
        this.Productdetailes = res;
        this.setValueInInputUpdate();
      });

  }
  //update model sit value in inputs
  setValueInInputUpdate() {
    // set data in input model update
    this.addHotelForm.controls.Name.setValue(
      this.Productdetailes?.name
    );
    this.addHotelForm.controls.Description.setValue(
      this.Productdetailes?.description
    );
    this.addHotelForm.controls.Type.setValue(
      this.Productdetailes?.type
    );
    this.addHotelForm.controls.Description.setValue(
      this.Productdetailes?.description
    );
    this.addHotelForm.controls.Price.setValue(
      this.Productdetailes?.price
    );
    this.addHotelForm.controls.Address.setValue(this.Productdetailes?.address);

  }

  // form data for add hotel
  addHotelForm: FormGroup = new FormGroup({
    Name: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required]),
    Type: new FormControl(null, [Validators.required]),
    Price: new FormControl(null, [Validators.required]),
    Address: new FormControl(null, [Validators.required]),

  });
  // get image value
  maultimages: any = null ;

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
    let formData = new FormData();
    formData.append(
      "Name",
      `${this.addHotelForm.controls["Name"].value}`
    );
    formData.append(
      "Description",
      `${this.addHotelForm.controls["Description"].value}`
    );
    formData.append("Type", this.addHotelForm.controls["Type"].value);
    formData.append(
      "Price",
      this.addHotelForm.controls["Price"].value
    );
    formData.append(
      "Address",
      this.addHotelForm.controls["Address"].value
    );
    formData.append("UserId","435b2e1c-7d0d-4bc1-acbd-55f27a2ded5d" );

    if(this.maultimages != null){

      for(let img of this.maultimages)

      formData.append("ImagesFile",img);
    }
    this._ComponentService
      .updateProduct(formData, this.productIdBeforDeleted)
      .subscribe(
        (res) => {
          this.addHotelForm.reset();
          this.maultimages = null
          this.toastr.success("add success", "Add!");
          this.GetAllProduct()
        },
        (err) => {
        }
      );
  }
}
