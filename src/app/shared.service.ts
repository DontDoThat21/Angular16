import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; // handles async operations.

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:62093/api";
readonly APIUrl = "http://localhost:62093/Photos";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department')
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val)
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val)
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/',val)
  }

  getEmployeeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee')
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val)
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/',val)
  }
}
