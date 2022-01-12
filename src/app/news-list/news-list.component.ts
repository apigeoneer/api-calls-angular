import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  public weatherResponse: any;
  public temp = -1;
  public pressure = -1;
  public humidity = -1;
  public detail = '';

  public newsResponse: any;
  public articles: any[] = [];

  private API_KEY_NEWSAPI = '53a8148678004285a49eecd885986d61';
  private _url_newsapi: string =
    'https://newsapi.org/v2/everything?q=tesla&from=2022-1-12&sortBy=publishedAt&apiKey=' +
    this.API_KEY_NEWSAPI;

  private API_KEY_OPENWEATHER = 'a1b571d176beab14691b37c3a0987819';
  private _url_openweather =
    'http://api.openweathermap.org/data/2.5/weather?q=London&appid=' +
    this.API_KEY_OPENWEATHER;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather().subscribe((data) => {
      this.weatherResponse = data;
      console.log(data);

      this.temp = data.main.temp;
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.detail = data.weather[0].description;
    });

    this.getNewsList().subscribe((data) => {
      this.newsResponse = data;
      console.log(data);

      this.articles = data.articles;
    });
  }

  // Cast the Observable into an object

  getWeather(): Observable<any> {
    return this.http.get<any>(this._url_openweather);
  }

  getNewsList(): Observable<any> {
    return this.http.get<any>(this._url_newsapi);
  }
}
