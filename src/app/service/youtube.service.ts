import { Injectable } from '@angular/core';
import { Channel } from 'src/app/model/channel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  private channels : any[];

  private url : string = 'http://localhost:8080/home';
  /**
   * getChannelRanking : channel[]
   */
  public getChannelRanking () : Promise<any[]> {

    return this.http.get(this.url)
      .toPromise()
      .then((res) => {
        const response : any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}
