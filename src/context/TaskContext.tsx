import { createContext, useState, ReactNode } from 'react';
import { tasks as mockedTasks } from '../data/database';
import { Task } from '../types/TaskType';

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: number, updatedTask: Partial<Task>) => void;
    deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(mockedTasks as Task[]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const updateTask = (id: number, updatedTask: Partial<Task>) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const value: TaskContextType = {
        tasks,
        addTask,
        updateTask,
        deleteTask,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContext;
