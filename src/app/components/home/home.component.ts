import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { Channel } from 'src/app/model/channel';
import { YoutubeService } from "src/app/service/youtube.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }
  channels: Channel[] ;
  displayedColumns: string[] = ['channelName', 'subscriberCount'];

  ngOnInit() {
    this.youtubeService.getChannelRanking().then((response) => {
      this.channels = response;
    });
  }
}
