import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  private API_KEY = 'a1165ec873794ad6a7711b399b973356';

  private _url: string =
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=' + this.API_KEY;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // Cast the Observable into an array
  getNewsList(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }
}
