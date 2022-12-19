import {PageProperty} from './page-property.enum';
import {PageEnterExit} from './page-enter-exit.enum';

export class Page {
  [PageProperty.uuid]?: string;
  [PageProperty.page]: string;
  [PageProperty.enterexit]?: PageEnterExit;
}
