import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../../core/services/task-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,

  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  taskForm: FormGroup;

  @Output() taskAdded = new EventEmitter<void>();

  @Input() selectedTask?: Task;
  @Output() taskSaved = new EventEmitter<void>();



  constructor(
    private fb: FormBuilder, 
    private taskService: TaskService,
    private snackbar: MatSnackBar) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['TODO', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.selectedTask) {
      this.taskForm.patchValue(this.selectedTask);
    }
  }


  submit() {
    if (this.taskForm.invalid) return;


      if (this.selectedTask?.id) {
        // EDIT
        this.taskService
          .updateTask(this.selectedTask.id, this.taskForm.value as Task)
          .subscribe(() => {
            this.taskSaved.emit();
            this.taskForm.reset({ status: 'TODO' });
        });
      }else{
        // ADD
        this.taskService.addTask(this.taskForm.value as any)
          .subscribe({
            next: () => {
              this.snackbar.open('Task added successfully', 'Close', {
                duration: 3000
              });
              this.taskForm.reset({ status: 'TODO' });
              this.taskAdded.emit();
        },
        error: () => {
           this.snackbar.open('Failed to add task', 'Close', {
            duration: 3000
          });
        }
      });
    }
  }


}
