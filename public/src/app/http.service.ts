import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getCakes();

  }
  addCake(newCake) {
    return this._http.post('/cakes', newCake)
  }
  addComment(newComment) {
    return this._http.post('/cakes/rating', newComment)
  }
  getCakes() {
    return this._http.get('/cakes');
  }
  showCake(current_cake) {
    return this._http.get('/cakes/'+current_cake._id);
  }

}
