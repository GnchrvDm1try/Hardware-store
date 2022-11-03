import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private readonly http: HttpClient;
  private readonly apiURL: string = environment.baseAPIUrl + "/api/review";

  constructor(http: HttpClient) {
    this.http = http;
  }
}
