import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../service/component.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  allBooking:any;

  erroMasgeForDelete:string = '';

  constructor(public _service:ComponentService,private _Router:Router) {

  }

  ngOnInit(): void {
    this.getAllBooking()
  }

    // get all user
    getAllBooking(){
      this ._service.GetAllBooking().subscribe(
          (res)=>{
            this.allBooking = res;
            console.log(this.allBooking);


          }
        )
      }

        // delete user
deleteBook(id:any){
  this._service.deleteBook(id).subscribe(
    (res)=>{
      this._Router.navigate(['/dashboard']);



    },
    (err)=>{
      this.erroMasgeForDelete = err.error.text


    }

    )
}

}
