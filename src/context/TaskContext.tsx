import { createContext, useState, ReactNode } from 'react';
import {Task} from "../types/TaskType.tsx";

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
};

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const value: TaskContextType = {
        tasks,
        addTask,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};