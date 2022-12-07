import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardservicesService {

  // baseURl: string = 'https://localhost:7272';

  baseURl: string = 'http://royaiti-001-site1.gtempurl.com';



  constructor(public _HttpClient: HttpClient) { }

  GetAllProductWithStatusTrue(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Product/StatusTrue`);
  }
  GetAllProductWithStatusFalse(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Product/StatusFalse`);
  }
  GetAllBooking(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Booking`);
  }
  getAllUser(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Accouent/getAllUser`);
  }
}

