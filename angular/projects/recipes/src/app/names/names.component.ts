import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {

  welcome = 'Welcome';
  title = 'Mahmoud App';
  name = '';
  isAdded = false;
  names = ['Mahmoud', 'Ahmed'];

  addName(event: any) {
    this.isAdded = true;
    this.names.push(this.name);
  }

  onUpdateName(event: any) {
    this.name = ( event.target as HTMLInputElement).value;
  }

  getColor() {
    return this.isAdded ? 'green' : 'blue';
  }
  clear() {
    this.names = [];
  }

}
