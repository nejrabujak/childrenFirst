import {MessageProperty} from './MessageProperty';

export class Message {
  [MessageProperty.id]?: string;
  [MessageProperty.name]: string;
  [MessageProperty.email]: string;
  [MessageProperty.note]: string;
}


