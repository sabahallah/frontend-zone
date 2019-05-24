import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnDestroy {

  private intervalSunbscribtion: Subscription;

  ngOnInit(): void {
    this.intervalSunbscribtion = interval(1000) // creating the observable // every second a new event will be emitted
      .subscribe( // the observer // handling the data
        (count) => {
          console.log('data emitted '+count);
        }
      ); 
  }

  ngOnDestroy(): void {
    // now you prevent memory leak
    this.intervalSunbscribtion.unsubscribe();
  }
}
