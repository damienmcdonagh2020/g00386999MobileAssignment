import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  GetNewsData():Observable<any>{
   return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=ie&apiKey=9121038e7ecb47efbb82d6a082361f6c");
  }
}
