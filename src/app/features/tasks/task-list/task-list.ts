import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TaskForm } from '../task-form/task-form';
import { Task } from '../../../shared/models/task';
import { TaskService } from '../../../core/services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, CommonModule, TaskForm, MatButtonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  delete(id: number) {
    this.taskService.deleteTask(id);
  }

}
