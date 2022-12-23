import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Message} from '../models/message.model';
import {MessageService} from '../services/message.service';
import {Route} from '../constants/route.constants';


@Injectable()
export class MessageResolver implements Resolve<Message> {

  constructor(private messageService: MessageService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Message> | Promise<Message> | Message {
    const id = route.paramMap.get(Route.ID.substring(1));
    const message = this.messageService.getMessage(id!);
    if (!message) {
      throw new Error('Message not found!');
    }
    return message;
  }
}
