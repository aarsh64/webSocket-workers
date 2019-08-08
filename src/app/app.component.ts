import { Component } from "@angular/core";
import { isPrimeNumber } from "node_modules/prime-number";
import primeNumberList from "node_modules/prime-number/list";
import { WokerService } from "./woker.service";
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
  title = "prime-numbers";
messages : string[] = [];
message:string;

  constructor(private worker: WokerService) {
    // worker.runWorker();
    // worker.sendMessage(this.message);
  //   worker.sendMessage(this.message);
  //   worker.getMessages().subscribe((message:string) => {
  //     this.messages.push(message);
  //     console.log('Message received from Server',message);
  // });   
  }
    sendMessage() {
    this.worker.sendMessage(this.message);
    this.message = '';
  }
  // sendMessage() {
  //   this.chatService.sendMessage(this.message);
  //   this.message = '';
  // }

  runThread() {
    const arePrimeList = primeNumberList.map(prime => {
      return isPrimeNumber(prime);
    });

    console.log("From JavaScript thread", arePrimeList);
  }
  ngOnInit(){
    this.worker.sendMessage('');
    this.worker.getMessages().subscribe((message:string) => {
      this.messages.push(message);
      console.log('Message received from Server',message);
  });
    
  }
}
//             Onservabel practice....
// const simpleObservable = new Observable((observer) => {

//       observer.next('blah blah');
//       observer.complete()
//   });

// simpleObservable.subscribe();
// simpleObservable.unsubscribe();
