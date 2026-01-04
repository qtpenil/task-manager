import { Injectable } from '@angular/core';
import { Task } from '../../shared/models/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1, title: 'Learn Angular', description: 'Practice daily', status: 'TODO',completed: false
    }
  ];

  private taskSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.taskSubject.asObservable();

  getTasks() {
    return this.tasks$;
  }

  addTask(task: Task) {
    task.id = Date.now();
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.taskSubject.next(this.tasks);
  }
  
}
