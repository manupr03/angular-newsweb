import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=83b8106a041e42d9a772d26dc71940ea"

  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }
}
