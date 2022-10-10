import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Tasks} from '../Models/Task';
import { environment } from 'src/environments/environment.prod';


const httpOptions={
  headers: new HttpHeaders({
    'content-type':'application/json',
  })
} 

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
  private apiUrl = environment.apiUrl+'Tasks';
  
  constructor(private http : HttpClient) { }

  getTasks() : Observable<Tasks[]> {

    return this.http.get<Tasks[]>(this.apiUrl);
  }
  getTask(Id : number) : Observable<Tasks> {
    const Url = `${this.apiUrl}/${Id}`;
    return this.http.get<Tasks>(Url);
  }
  DeleteTask(Id : number): Observable <Tasks>{
    const Url = `${this.apiUrl}/${Id}`;
    return this.http.delete<Tasks>(Url);
  }
  UpdateTask(Id:number,Task:Tasks): Observable <Tasks>{
    const Url = `${this.apiUrl}/${Id}`;
    
    return this.http.put<Tasks>(Url,Task,httpOptions);
  }
  AddTask(Task:Tasks): Observable <Tasks>{
  
    return this.http.post<Tasks>(this.apiUrl,Task,httpOptions);
  }
}
