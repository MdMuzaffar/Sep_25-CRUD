import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import { CustomService } from './service/custom.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD';

  number = 50;
  constructor(private customService: CustomService){   
      
    }
  

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

  loadDataById(id:any){
    this.customService.addCartItemById(id).subscribe(res=> {
      if(res.res){
        alert("Product added in the cart")
        this.customService.cartAddedSubject.next(true);
      }
    })
  }

}
