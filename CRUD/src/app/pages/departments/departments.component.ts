import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments:any[]=[];
  isListView:boolean = true;
  employeeData: any;
  constructor( private http:HttpClient){}
  // url = "C:\Users\Muzaffar Ahmed\Desktop\Projects\Angular-Afsar\CRUD_InAngular_Sep_12\CRUD_InAngular_Sep_25_2023\Sep_25-CRUD\CRUD\src\assets"
  ngOnInit(): void {
    this.loadDepartment();
    this.loadEmployees();
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
    })
  }
}