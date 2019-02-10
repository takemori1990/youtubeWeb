import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/model/channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  channels: Channel[] = [
    {channelName: 'Hikakin', subscriberCount: 0},
    {channelName: 'Hajimeshacho', subscriberCount: 0}
  ];
  displayedColumns: string[] = ['channelName', 'subscriberCount'];

  ngOnInit() {
    // const httpRequest = new XMLHttpRequest();

    // httpRequest.open('GET', 'http://13.230.87.120:8080/home', true);

    // console.log(httpRequest.readyState);
    // // XMLHttpRequestオブジェクト(HTTPリクエスト)のonreadystatechangeイベントが発生したら、=で与えた関数が発動する
    // httpRequest.onreadystatechange = () => {
    //       // jsonをtextデータとして受け取る
    //       const jsonText = httpRequest.responseText;
    //       console.log(jsonText);
    //       console.log(httpRequest.response);
    //       // textデータとして受け取ったjsonをパース
    //       const json = JSON.parse(jsonText);
    //       if (json !== null) {
    //         this.channels[0].subscriberCount = json.items[0].statistics.subscriberCount;
    //         console.log(json.items[0].statistics.subscriberCount);
    //       }

    //   };
    // httpRequest.send(null);

  }
}
