import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';

@Injectable()
export class PageUuidService{

  public uuidValue: string;

  constructor() {}

  public getDeviceId(): string {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = this.generateUUID();
      localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
  }

  public generateUUID(): string{
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }
}
