import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { addEmployeeComponent } from './addEmployee.component';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppRoutingModule}  from './app.routing';
import { EmployeesService } from './employees.service';
import { EmployeeComponent } from './employee.component';


@NgModule({
  imports: [ 
    BrowserModule,AppRoutingModule ,
    FormsModule, 
    HttpClientModule,
   
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  
  ],
declarations: [ AppComponent, addEmployeeComponent, EmployeesComponent, EmployeeComponent ],
  providers:    [ InMemoryDataService, EmployeesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
