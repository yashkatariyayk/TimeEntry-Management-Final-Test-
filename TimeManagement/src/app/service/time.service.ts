import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time: Time[] = [];

  uri = "http://localhost:3000/time";

  constructor(private http: HttpClient) { }

  addTime(time: Time) {
    return this.http
      .post(`${this.uri}/addtime`, time)
      .subscribe(res => console.log("Add time"));
  }

  // To Get The List Of user
  getTime() {
    return this.http.get(`${this.uri}`);
  }

  // To Get user Details For Single Record Using Id
  editTime(id): Observable<any> {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  //To update user
  updateTime(user, id) {
    this.http
      .post(`${this.uri}/update/${id}`, user)
      .subscribe(res => console.log("Update Done"));
  }

  // To Delete Any User
  deleteTime(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
