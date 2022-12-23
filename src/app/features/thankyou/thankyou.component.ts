import {Component} from '@angular/core';
import {Route} from '../../constants/route.constants';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {

  public route = Route;
}
