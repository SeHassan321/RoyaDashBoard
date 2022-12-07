import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../service/component.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUser:any;

  erroMasgeForDelete:string = '';

  constructor(public _service:ComponentService,private _Router:Router) {

  }

  ngOnInit(): void {
    this.getAllUser()
  }

    // get all user
    getAllUser(){
      this ._service.getAllUser().subscribe(
          (res)=>{
            this.allUser = res;

          }
        )
      }

        // delete user
deleteUser(email:string){
  this._service.DeleteUser(email).subscribe(
    (res)=>{
      // window.location.href="https://tohotels.app/component/register";
      this.getAllUser();



    },
    (err)=>{
      this.erroMasgeForDelete = err.error.text


    }

    )
}
}
