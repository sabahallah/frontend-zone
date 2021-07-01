import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private appservice: AppServiceService) { }

  buttonClicked = false;
  buttonClickedUsingSubject = false;

  buttonClickedSubscription: Subscription;
  buttonClickedUsingSubjectSubscription: Subscription;

  ngOnInit() {
    this.buttonClickedSubscription = this.appservice.isClicked.subscribe(
      (status: boolean)=>{
        this.buttonClicked = status;
      }
    );

    this.buttonClickedUsingSubjectSubscription = this.appservice.isClickedUsingSubject.subscribe(
      (status: boolean)=>{
        this.buttonClickedUsingSubject = status;
      }
    );
  }

  onClick() {
    this.appservice.isClicked.emit(true);
  }

  onClickUsingSubject() {
    this.appservice.isClickedUsingSubject.next(true);
  }

  ngOnDestroy(): void {
    this.buttonClickedSubscription.unsubscribe();
    this.buttonClickedUsingSubjectSubscription.unsubscribe();
  }

}
