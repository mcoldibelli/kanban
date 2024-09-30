import { DropResult } from "react-beautiful-dnd";

export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};

export type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    onDragEnd: (result: DropResult) => void;
};

export type TaskProps = {
    id: string,
    index: number,
    content: Task,
    onEdit: (id: string) => void,
    onDelete: (id: string) => void
}