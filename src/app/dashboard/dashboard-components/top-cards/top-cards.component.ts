import { Component, OnInit } from '@angular/core';
import { DashboardservicesService } from '../../../dashboardservices.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

allUsers:any;
allBooking:any;
allAccept:any;
allTrue:any;
  constructor(private _DashboardservicesService:DashboardservicesService) {

this.getallAccept()
this.getallBooking()
this.getallTrue()
this.getallUsers()


  }

  getallUsers(){
    this._DashboardservicesService.getAllUser().subscribe(
      (res)=>{
        this.allUsers = res.length
      }
    )
  }
  getallBooking(){
    this._DashboardservicesService.GetAllBooking().subscribe(
      (res)=>{
        this.allBooking = res.length
        console.log(res);

      }
    )
  }
  getallAccept(){
    this._DashboardservicesService.GetAllProductWithStatusFalse().subscribe(
      (res)=>{
        this.allAccept = res.length
      }
    )
  }
  getallTrue(){
    this._DashboardservicesService.GetAllProductWithStatusTrue().subscribe(
      (res)=>{
        this.allTrue = res.length
      }
    )
  }

  ngOnInit(): void {



  }

}
