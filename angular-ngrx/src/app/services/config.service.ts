import { IConfig } from './../models/config.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

 configUrl = `${environment.apiUrl}config.json`;

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<IConfig>{
    return this._http.get<IConfig>(this.configUrl);
  }
}
