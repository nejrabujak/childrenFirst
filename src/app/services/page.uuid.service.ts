import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';


@Injectable()
export class PageUuidService{
  public uuidValue: string;

  constructor() {}

  // tslint:disable-next-line:typedef align
  public getDeviceId() {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = this.generateUUID();
      localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
  }

  // tslint:disable-next-line:typedef
  public generateUUID(){
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }
}
