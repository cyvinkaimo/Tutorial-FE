import { Component, OnInit } from '@angular/core';
import { Employee } from '../_shared/models/employee.model';
import { EmployeeHttpService } from '../_shared/services/employee-http.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];


  constructor(private employeeHttpService: EmployeeHttpService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeHttpService.getEmployees()
      .subscribe(
        response => {
          this.employees = response.data
        }
      )
  }

}
