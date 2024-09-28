export type TaskState = 'pending' | 'in_progress' | 'completed';

export type Task = {
    id: number;
    title: string;
    description: string;
    state: TaskState;
};
