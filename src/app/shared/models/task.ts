export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}
