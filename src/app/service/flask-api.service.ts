import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlaskApiService {

  constructor(private http: HttpClient) { }

  sendQuery(query: any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(`http://127.0.0.1:5000/`,query,{ headers, responseType:'text'})
  }
  getResponse() : Observable<any>{
    // return this.http.get(`http://localhost:3000/`)
    // console.log("hey I am here", this.http.get(`http://127.0.0.1:5000/`))
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`http://127.0.0.1:5000/`,{ headers, responseType:'text'})
  }

}
