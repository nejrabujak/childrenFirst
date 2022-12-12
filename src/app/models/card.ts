import {CardProperty} from './CardProperty';

export class Card {
  [CardProperty.uuid]: string;
  [CardProperty.page]: string;
  [CardProperty.card]: string;
  [CardProperty.enterexit]: string;
}
