import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD';

  number = 50;

  ngOnInit(){
    const subject = new Subject();

    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));

    subject.next(Math.random());

    const sub = new Subject();
    const data = ajax('https://jsonplaceholder.typicode.com/users');

    // data.subscribe(d=> console.log(d));
    // data.subscribe(d=> console.log(d));
  
    sub.subscribe(d=> console.log(d));
    sub.subscribe(d=> console.log(d));
    sub.subscribe(d=> console.log(d));

    const reasult = data.subscribe(sub)

  }
}
