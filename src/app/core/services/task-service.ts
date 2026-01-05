import { Injectable } from '@angular/core';
import { Task } from '../../shared/models/task';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

    private API = `${environment.apiUrl}/tasks`;

    constructor(private http: HttpClient) {}


    // GET http://localhost:8080/api/tasks
    getTasks() {
      return this.http.get<Task[]>(this.API);
    }

    // POST http://localhost:8080/api/tasks
    addTask(task: Task) {
      return this.http.post<Task>(this.API, task);
    } 

    // DELETE http://localhost:8080/api/tasks/{id}
    deleteTask(id: number) {
      return this.http.delete(`${this.API}/${id}`);
    }

    updateTask(id: number, task: Task) {
      return this.http.put<Task>(`${this.API}/${id}`, task);
    } 


  // private tasks: Task[] = [
  //   {
  //     id: 1, title: 'Learn Angular', description: 'Practice daily', status: 'TODO',completed: false
  //   }
  // ];

  // private taskSubject = new BehaviorSubject<Task[]>(this.tasks);
  // tasks$ = this.taskSubject.asObservable();

  // getTasks() {
  //   return this.tasks$;
  // }

  // addTask(task: Task): Observable<void> {
  //   task.id = Date.now();
  //   task.completed = false;
  //   this.tasks.push(task);
  //   this.taskSubject.next(this.tasks);
  //   return of(undefined);
  // }

  // deleteTask(id: number) {
  //   this.tasks = this.tasks.filter(t => t.id !== id);
  //   this.taskSubject.next(this.tasks);
  // }
  
}
