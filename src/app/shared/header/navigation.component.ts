import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  userName:any= localStorage.getItem("userName")

  constructor(private modalService: NgbModal,public _Router:Router) {
  }



  logOut(){
    localStorage.removeItem("Token")
    localStorage.removeItem("userName")
    localStorage.removeItem("Role")
    this._Router.navigate(["/login"])

  }
  ngAfterViewInit() { }
}
