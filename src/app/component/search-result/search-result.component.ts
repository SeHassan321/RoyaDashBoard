import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComponentService } from '../service/component.service';
declare var $: any;
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  isLoding: boolean = true;
  hotelsData: any[any] = [];
  searchInput:any;
  constructor(
    public _ComponentService: ComponentService,
    public toastr: ToastrService,
    private _Router: Router,
    private  _ActivatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchInput = this._ActivatedRoute.snapshot.params;

    this.AllhotelData();
  }

  // get all data of hotel
  AllhotelData() {
    this._ComponentService.searchForCountry(this.searchInput.result).subscribe(
      (res) => {
        this.hotelsData = res.data;

      },
      (err) => {},
      () => {
        this.isLoding = false;
      }
    );
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
  deleteCity(id: any) {
    this._ComponentService.deleteProduct(id).subscribe(
      (res) => {
        if(res == true){

          this.AllhotelData()



        }
      },
      (err) => {},
      () => {}
      );
      this.toastr.success("deleted success", "deleted!");
  }
  // get id to make update and delete
  hotelIdBeforDeleted: any;
  CitiesData: any;
  hoteldetailes: any;
  nameOFHotelYouWillDelete:any;
  getId(id: any,nameOFHotelYouWillDelete:any) {
this.nameOFHotelYouWillDelete = nameOFHotelYouWillDelete;

    this.hotelIdBeforDeleted = id;
    // get hotel data
    this._ComponentService
      .GetProductById(this.hotelIdBeforDeleted)
      .subscribe((res) => {
        this.hoteldetailes = res;
        this.setValueInInputUpdate();
      });
    // get cities data
    this._ComponentService.GetAllProduct("").subscribe((res) => {
      this.CitiesData = res.data;
    });
  }
  //update model sit value in inputs
  setValueInInputUpdate() {
    // set data in input model update
    this.addHotelForm.controls.ContinentName.setValue(
      this.hoteldetailes?.continentName.split('@').slice(0,1)
    );
    this.addHotelForm.controls.CountryName.setValue(
      this.hoteldetailes?.countryName.split('@').slice(0,1)
    );
    this.addHotelForm.controls.HotelName.setValue(
      this.hoteldetailes?.hotelName
    );
    this.addHotelForm.controls.Description.setValue(
      this.hoteldetailes?.description
    );
    this.addHotelForm.controls.MainDescription.setValue(
      this.hoteldetailes?.mainDescription
    );
    this.addHotelForm.controls.Url.setValue(this.hoteldetailes?.url);
    this.addHotelForm.controls.SortByNumber.setValue(
      this.hoteldetailes?.sortByNumber
    );
    this.addHotelForm.controls.CityId.setValue(this.hoteldetailes?.cityId);
    this.addHotelForm.controls.Rate.setValue(this.hoteldetailes?.rate);
  }

  // form data for add hotel
  addHotelForm: FormGroup = new FormGroup({
    ContinentName: new FormControl(null, [Validators.required]),
    CountryName: new FormControl(null, [Validators.required]),
    HotelName: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required]),
    MainDescription: new FormControl(null, [Validators.required]),
    Url: new FormControl(null, [Validators.required]),
    CityId: new FormControl(null, [Validators.required]),
    SortByNumber: new FormControl(null, [Validators.required]),
    Rate: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),

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
      "ContinentName",
      this.addHotelForm.controls["ContinentName"].value
    );
    formData.append(
      "CountryName",
      this.addHotelForm.controls["CountryName"].value
    );
    formData.append("HotelName", this.addHotelForm.controls["HotelName"].value);
    formData.append(
      "Description",
      this.addHotelForm.controls["Description"].value
    );
    formData.append(
      "MainDescription",
      this.addHotelForm.controls["MainDescription"].value
    );
    formData.append("Url", this.addHotelForm.controls["Url"].value);
    formData.append("CityId", this.addHotelForm.controls["CityId"].value);
    formData.append("Rate", this.addHotelForm.controls["Rate"].value);
    formData.append(
      "SortByNumber",
      this.addHotelForm.controls["SortByNumber"].value
    );
    if(this.maultimages != null){

      for(let img of this.maultimages)

      formData.append("imageFile",img);
    }
    this._ComponentService
      .updateProduct(formData, this.hotelIdBeforDeleted)
      .subscribe(
        (res) => {
          this.addHotelForm.reset();
          this.maultimages = null
          this.toastr.success("add success", "Add!");

          this.AllhotelData()
        },
        (err) => {
        }
      );
  }

}
