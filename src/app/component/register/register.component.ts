import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentService } from '../service/component.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
allUser:any;

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


  // register form
  erroMasge:string = '';
  erroMasgeForDelete:string = '';
  registerForm: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required]),
    Name: new FormControl(null, [Validators.required]),
    Password: new FormControl(null, [Validators.required]),

  });

//submit rigster
  submitRegister(e:any){
    console.log(this.registerForm.value);

    this._service.RegisterAsAdminHelper(this.registerForm.value).subscribe(
      (res)=>{
        this._Router.navigate(['/dashboard']);


      },
      (err)=>{
        this.erroMasge = err.error.errorMsg

      }

    )
  }
  // delete user
deleteUser(email:string){
  this._service.DeleteUser(email).subscribe(
    (res)=>{
      // window.location.href="https://tohotels.app/component/register";
      this._Router.navigate(['/dashboard']);



    },
    (err)=>{
      this.erroMasgeForDelete = err.error.text


    }

    )
}

}
