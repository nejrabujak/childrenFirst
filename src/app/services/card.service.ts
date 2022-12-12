import {Injectable} from '@angular/core';
import {Card} from '../models/card';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class CardService {

  private readonly baseUrl: string = `${environment.backendUrl}`;
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  public create(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.baseUrl}/card`, card);
  }

}
