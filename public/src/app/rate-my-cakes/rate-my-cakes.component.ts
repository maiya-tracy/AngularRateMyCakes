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
  isCakeShowing: boolean;
  current_cake: any;
  cakes: [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newCake = { name: "", link: "" }
    this.newComment = {rating: null, comment: "", cake_id: null};
    this.isCakeShowing = false;
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
      this.newCake = { name: "", link: "" }
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
  showCake(cake) {
    this._httpService.showCake(cake).subscribe(data => {
      this.isCakeShowing = true;
      console.log("found current cake", data)
      console.log(this.isCakeShowing)
      this.current_cake = data.data;
    })
  }
}
