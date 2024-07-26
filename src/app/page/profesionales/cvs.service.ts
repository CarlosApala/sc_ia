import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvsService {
  private jsonUrl = '/public/assets/json/cvs.json';

  constructor(private http: HttpClient) {}

  getCvData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
