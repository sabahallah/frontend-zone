import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  isClicked = new EventEmitter<boolean>();
  isClickedUsingSubject = new Subject<boolean>();

  constructor() { }
}
