import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class WokerService {
  //Here service is created so that the same data can be shared with all the components without repeating the same code.
  
  private url = "http://localhost:8000";
  private socket;

  constructor() {
    this.runWorker();
    
    this.socket = io(this.url);
    
  }

  public sendMessage(message) {
    this.socket.emit("new-message", message);
    // console.log('initial:',message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
            // console.log('received mssg:',message);
        });
    });
  }
  runWorker() {
    const worker = new Worker("src/app/prime-calculations.worker", {
      type: "module"
    });

    worker.onmessage = ({ data }) => {
      console.log("From Web Worker:", data);
    };

    worker.postMessage({});
  }
}
