import {Injectable} from '@angular/core';
import {Page} from '../models/page.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {PageProperty} from '../models/page-property.enum';
import {PageEnterExit} from '../models/page-enter-exit.enum';
import {PageUuidService} from './page-uuid.service';

@Injectable()
export class PageService {

  private readonly baseUrl: string = `${environment.backendUrl}`;

  constructor(
    private http: HttpClient,
    private pageUuidService: PageUuidService,
  ) { }

  public enter(pageName: string): Observable<Page> {
    return this.postPage(pageName, PageEnterExit.enter);
  }

  public exit(pageName: string): Observable<Page> {
    return this.postPage(pageName, PageEnterExit.exit);
  }

  private postPage(pageName: string, enterExit: PageEnterExit): Observable<Page> {
    const page: Page = {
      [PageProperty.uuid]: this.pageUuidService.getDeviceId(),
      [PageProperty.page]: pageName,
      [PageProperty.enterexit]: enterExit,
    };
    return this.http.post<Page>(`${this.baseUrl}/page`, page);
  }
}
