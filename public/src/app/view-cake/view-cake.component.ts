import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-cake',
  templateUrl: './view-cake.component.html',
  styleUrls: ['./view-cake.component.css']
})
export class ViewCakeComponent implements OnInit {

    current_cake: any;
    isCakeShowing: boolean;

    constructor(private _httpService: HttpService) { }
    ngOnInit() {
      this.isCakeShowing = false;
    }
    showCake() {
      this._httpService.showCake(this.current_cake).subscribe(data => {
        console.log("found current cake", data)
        this.cake = data.data;
        this.isCakeShowing = true;
      })
    }


}
