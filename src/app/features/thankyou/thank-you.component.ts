import {Component} from '@angular/core';
import {Route} from '../../constants/route.constants';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  public route = Route;

}
