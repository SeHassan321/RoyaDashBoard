import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ComponentService } from "../service/component.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public _service: ComponentService, public _Router: Router) {}

  ngOnInit(): void {}
  errMsg: string = "";
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required]),
    Password: new FormControl(null, [Validators.required]),
  });
  submitLigon(e: any) {
    this._service.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem("Token", res.token);
        localStorage.setItem("userName", res.userName);
        localStorage.setItem("userId", res.userId);
        localStorage.setItem("Role", res.roles);
    // window.location.href ="https://tohotels.app/admin/dashboard";
    this._Router.navigate(['/dashboard']);

      },
      (err) => {
        this.errMsg = err.error.errorMsg;
      }
    );
  }
}
