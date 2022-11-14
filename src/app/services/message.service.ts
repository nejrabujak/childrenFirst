import {Injectable} from '@angular/core';
import {Message} from '../models/message';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class MessageService {

  private readonly baseUrl: string = `${environment.backendUrl}/message`;

  constructor(private http: HttpClient) {
  }

  public create(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}`, message);
  }

  public getMessage(id: string): Observable<Message> {
    return this.http.get<Message>(`${this.baseUrl}/${id}`);
  }
}
