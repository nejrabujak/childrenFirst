import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PageUuidService} from './page.uuid.service';
import {PageEnterExit} from '../models/page-enter-exit.enum';
import {Card} from '../models/card.model';
import {CardProperty} from '../models/card-property.enum';

@Injectable()
export class CardService {

  private readonly baseUrl: string = `${environment.backendUrl}`;

  constructor(
    private http: HttpClient,
    private pageUuidService: PageUuidService,
  ) { }

  public enter(pageName: string, cardName: string): Observable<Card> {
    return this.postCard(pageName, cardName, PageEnterExit.enter);
  }

  public exit(pageName: string, cardName: string): Observable<Card> {
    return this.postCard(pageName, cardName, PageEnterExit.exit);
  }

  private postCard(pageName: string, cardName: string, enterExit: PageEnterExit): Observable<Card> {
    const card: Card = {
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: pageName,
      [CardProperty.card]: cardName,
      [CardProperty.enterexit]: enterExit,
    };
    return this.http.post<Card>(`${this.baseUrl}/card`, card);
  }
}
