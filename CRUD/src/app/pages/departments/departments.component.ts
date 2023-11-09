import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments:any[]=[];
  isListView:boolean = true;
  employeeData: any;

   message: string = '';


  constructor( private http:HttpClient, private renderer: Renderer2, private el: ElementRef){}
  // url = "C:\Users\Muzaffar Ahmed\Desktop\Projects\Angular-Afsar\CRUD_InAngular_Sep_12\CRUD_InAngular_Sep_25_2023\Sep_25-CRUD\CRUD\src\assets"
  ngOnInit(): void {
    this.loadDepartment();
    this.loadEmployees();

    this.message = 'I am a private message';  
    setTimeout(() => {
      this.message = 'I am still a private message';
    }, 2000);
    console.log(this.message);
    const container = this.el.nativeElement.querySelector('#container');
  }

  loadDepartment(){
    this.http.get("../assets/department.json").subscribe((res:any )=>{
        // debugger
        this.departments = res.data;
    })
  }

  loadEmployees(){
    this.http.get("assets/getEmployee.json").subscribe((res:any)=>{
      // debugger
    this.employeeData = res.data
    // return Math.prop();
    })
  }
  model: any = {};

  onSubmit() {
    console.log('Form submitted with data:', this.model);
  }
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  updateItems() {
    // Simulate an update by changing the reference to the items array
    this.items = [...this.items, { id: 4, name: 'Item 4' }];
  }

  trackByItemId(index: number, item: any) {
    return item.id;
  }

  addElement() {
    // Create a new <p> element
    const paragraph = this.renderer.createElement('p');
    const text = this.renderer.createText('This is a dynamically added paragraph.');

    // Append the text node to the paragraph element
    this.renderer.appendChild(paragraph, text);

    // Append the paragraph element to the container
    const container = this.el.nativeElement.querySelector('#container');
    this.renderer.appendChild(container, paragraph);
  }
  
   var personDetail = {
    fullName: 'Muzaffar Ahmed',
    nickName: 'Mujju',
    tellTheTruth(){
      console.log(`My Name is ${this.fullName} and I am a programmer`)
      
    }
    console.log(personDetail.fullName);
    console.log(personDetail.nickName);
  }
  
}
