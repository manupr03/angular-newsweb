import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=83b8106a041e42d9a772d26dc71940ea"

  //technewsapiurl 
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=83b8106a041e42d9a772d26dc71940ea"

  //businessnewsurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=83b8106a041e42d9a772d26dc71940ea"
  
  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }

  //techNews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }

  //businessNews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl)
  }
}
