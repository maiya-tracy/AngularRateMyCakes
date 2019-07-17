import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-cake',
  templateUrl: './view-cake.component.html',
  styleUrls: ['./view-cake.component.css']
})
export class ViewCakeComponent implements OnInit {

  @Input() current_cake: any;
  @Input() isCakeShowing: boolean;

  constructor() { }
  ngOnInit() {
  }

}
