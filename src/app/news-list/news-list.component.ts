import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  public newsResponse = { status: '', totalResults: -1, articles: [] };
  public newsList: any[] = [];

  private API_KEY = '53a8148678004285a49eecd885986d61';

  private _url: string =
    'https://newsapi.org/v2/everything?q=tesla&from=2021-12-12&sortBy=publishedAt&apiKey=' +
    this.API_KEY;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNewsList().subscribe((data) => (this.newsResponse = data));
    this.newsList = this.newsResponse.articles;

    let response = this.getNewsList();
    console.log('response', response);
    console.log('newsResponse', this.newsResponse);
    console.log('newsList', this.newsList);
  }

  // Cast the Observable into an array
  getNewsList(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
