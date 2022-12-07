import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentService } from '../../service/component.service';
declare var $: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  productId:any;
  productDetails:any;
  isLoding:boolean = true;
  constructor(public _ComponentService:ComponentService , public _RouterLinkActive:ActivatedRoute ) {
   this.productId = this._RouterLinkActive.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.GetHotelById();
  }


  GetHotelById(){
   this._ComponentService.GetProductById(this.productId).subscribe(
      (res)=>{
        this.productDetails = res;
        console.log(res);

      },
      (err)=>{},
      ()=>{
        this.isLoding = false;

      }
    )
  }


  slider(e:any){
    $(".class-item").click(function(){
      var imgSrc = $(e.target).attr('src');
      $('#main-img').attr('src',imgSrc);
      })
  }
}
