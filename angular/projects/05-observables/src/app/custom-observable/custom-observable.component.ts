import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  private customObservableSubscription: Subscription;
  ngOnInit() {

    const customObservable: Observable<any> =  Observable.create(observer => {
        let count = 0;
        setInterval(()=> {
          if(count > 3){
            observer.error(new Error('count is greater than 3'));
            // In error, it cancels the observable, complete() will not be called.
          }
          // if(count == 2){
          //   observer.complete(); // after calling complete, no other values would be emitted.
          // }
          observer.next(count);
          count++;
        }, 1000);
      }
    );
    
    this.customObservableSubscription = customObservable
    .pipe( // operators, every observable has a pipe method.
    filter( // you can chain as many operators as you need be ',' separators
      (data: number, index: number) => {
        return data > 0;
      }
    ),
    map(
      (data: number)=>{
        return 'transformed: ' + data*2;
      }
    ))
    .subscribe(
      data => {
        console.log('data: ' + data);
      },
      error => {
        console.log('error happened: ' + error);
        // you can send to your server, you can show alert message to the user...
        alert(error);
      },
      () => {
        console.log('completed');
      }
    )
  }

  ngOnDestroy(): void {
    this.customObservableSubscription.unsubscribe();
  }

}
