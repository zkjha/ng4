import { Component, OnInit } from '@angular/core';
declare var  AMap: any;
@Component({
  selector: 'app-a-map',
  templateUrl: './a-map.component.html',
  styleUrls: ['./a-map.component.css']
})
export class AMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [116.397428, 39.90923]
    });
  }
  inputMethod(value: any) {
    // console.log((<HTMLInputElement>event.target).value);
    console.log(value);
  }

}
