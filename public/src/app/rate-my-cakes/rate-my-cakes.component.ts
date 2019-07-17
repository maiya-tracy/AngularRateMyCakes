import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rate-my-cakes',
  templateUrl: './rate-my-cakes.component.html',
  styleUrls: ['./rate-my-cakes.component.css']
})
export class RateMyCakesComponent implements OnInit {
  newCake: any;
  newComment: any;
  cakes: [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newCake = { name: "", URL: "" }
    this.newComment = {rating: null, comment: "", cake_id: null};
    this.getCakesFromService();
  }
  getCakesFromService() {
    this._httpService.getCakes().subscribe(data => {
      console.log("got cakes", data)
      this.cakes = data.data;
    })
  }
  addCake(): void {
    this._httpService.addCake(this.newCake).subscribe(data => {
      console.log("added cake", data);
      this.newCake = { name: "", URL: "" }
      this.getCakesFromService();
    })
  }
  addComment(): void {
    this._httpService.addComment(this.newComment).subscribe(data => {
      console.log(`added comment`, data);
      this.newComment = {rating: null, comment: "", cake_id: null};
      this.getCakesFromService();
    })
  }
}
