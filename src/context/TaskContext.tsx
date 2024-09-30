import { createContext, useState, ReactNode } from 'react';
import tasksMocked from '../data/database.json';
import { Task, TaskContextType, TaskStatus } from '../types/TaskType';
import { DropResult } from 'react-beautiful-dnd';

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(tasksMocked as unknown as Task[]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const updateTask = (id: string, updatedTask: Partial<Task>) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;

        if (source.droppableId !== destination.droppableId) {
            const sourceTasks = tasks.filter(task => task.status === source.droppableId);
            const destTasks = tasks.filter(task => task.status === destination.droppableId);
            const [movedTask] = sourceTasks.splice(source.index, 1);
            movedTask.status = destination.droppableId as TaskStatus;
            destTasks.splice(destination.index, 0, movedTask);

            setTasks(prevTasks => [
                ...prevTasks.filter(task => task.status !== source.droppableId && task.status !== destination.droppableId),
                ...sourceTasks,
                ...destTasks
            ]);
        } else {
            const columnTasks = tasks.filter(task => task.status === source.droppableId);
            const [movedTask] = columnTasks.splice(source.index, 1);
            columnTasks.splice(destination.index, 0, movedTask);

            setTasks(prevTasks => [
                ...prevTasks.filter(task => task.status !== source.droppableId),
                ...columnTasks
            ]);
        }
    };

    const value: TaskContextType = {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        onDragEnd
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContext;