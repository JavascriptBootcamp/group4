import * as MessengerModule from './Messenger';
// import { Messenger } from './Messenger';
import DefaultMessenger, { str } from './DefaultMessenger';

let whatsappMessenger: MessengerModule.Messenger = new MessengerModule.Messenger(5000);
whatsappMessenger.print();

console.log(MessengerModule.str);