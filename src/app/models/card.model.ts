import {CardProperty} from './card-property.enum';

export class Card {
  [CardProperty.uuid]: string;
  [CardProperty.page]: string;
  [CardProperty.card]: string;
  [CardProperty.enterexit]: string;
}
