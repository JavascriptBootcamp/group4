import { Injectable } from '@angular/core';
import { logTypes } from './logTypes.model';

// export enum logTypes {
//   ERROR,
//   INFO,
//   WARNING,
//   NONE
// }

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class LoggerService {
  logType: logTypes;
  messages: string[];
  constructor() {
    this.messages = [];
    this.logType = logTypes.NONE;
  }

  setLogType(logType: logTypes): void {
    this.logType = logType;
  }

  log(message: string): void {
    this.messages.push(message);
    if (this.logType === logTypes.INFO) {
      console.log(message);
    }
    else if (this.logType === logTypes.WARNING){
      console.warn(message);
    }
    else if (this.logType === logTypes.ERROR){
      console.error(message);
    }
  }

  getMessages(): string[]{
    return this.messages;
  }
}
