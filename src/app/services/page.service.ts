import {Injectable} from '@angular/core';
import {Page} from '../models/page';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class PageService {

  private readonly baseUrl: string = `${environment.backendUrl}`;
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  public create(page: Page): Observable<Page> {
    return this.http.post<Page>(`${this.baseUrl}/page`, page);
  }

}
