import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { TaskList } from './features/tasks/task-list/task-list';
import { AuthGuard } from './core/guards/AuthGuard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { 
        path: 'tasks', 
        component: TaskList,
        canActivate: [AuthGuard] 
    },
    { path: '**', redirectTo: 'login' }
];
