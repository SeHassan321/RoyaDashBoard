import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  baseURl: string = 'http://royaiti-001-site1.gtempurl.com';
  // baseURl: string = 'https://localhost:7272';

  constructor(public _HttpClient: HttpClient) { }

  //product----------------------------------------------------
  GetAllProduct(hotelName:any = '',countryName:any = '', cityName:any = '',PageSize:any = 50,PageIndex:any = 1): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Product`);
  }
  GetAllProductWithStatusFalse(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Product/StatusFalse`);
  }
  GetAllProductWithStatusTrue(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Product/StatusTrue`);
  }
  AddProduct(body: any): Observable<any> {
    return this._HttpClient.post(`${this.baseURl}/api/Product`, body);
  }
  updateProduct(body: any,id:any): Observable<any> {
    return this._HttpClient.put(`${this.baseURl}/api/Product/${id}`, body);
  }
  updateStutesProduct(body: any): Observable<any> {

    return this._HttpClient.put(`${this.baseURl}/api/Product/Status`, body);
  }
  deleteProduct(id: any): Observable<any> {
    return this._HttpClient.delete(`${this.baseURl}/api/Product/${id}`);
  }

  GetProductById(id:any): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Product/${id}`);
  }

  //product----------------------------------------------------
  GetAllBooking(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Booking`);
  }

  deleteBook(id: any): Observable<any> {
    return this._HttpClient.delete(`${this.baseURl}/api/Booking/${id}`);
  }

  // GetProductById(id:any): Observable<any> {
  //   return this._HttpClient.get(`${this.baseURl}/api/Product/${id}`);
  // }

  // login-------------------------------------------------
  login(body: any): Observable<any> {
    return this._HttpClient.post(`${this.baseURl}/api/Accouent/login`, body);
  }
  RegisterAsAdminHelper(body: any): Observable<any> {
    return this._HttpClient.post(`${this.baseURl}/api/Accouent/admin`, body);
  }
  getAllUser(): Observable<any> {
    return this._HttpClient.get(`${this.baseURl}/api/Accouent/getAllUser`);
  }
  DeleteUser(Email:any): Observable<any> {
    return this._HttpClient.delete(`${this.baseURl}/api/Accouent/deleteUser/${Email}`);
  }
  // search

  searchForCountry(data:any):Observable<any>{
    return this._HttpClient.get(`${this.baseURl}/api/Product/allData?Search=${data}&PageSize=2000`)
    }
}
