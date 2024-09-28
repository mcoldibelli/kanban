export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export type Task = {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
};
