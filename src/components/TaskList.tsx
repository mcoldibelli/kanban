import {FC} from 'react';
import TaskItem from './TaskItem';
import { tasks } from '../data/database';
import {Task} from "../types/TaskType.tsx";

const TaskList:FC = () => {
    return (
        <div className="task-list">
            {tasks.map((task: Task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    );
};
export default TaskList;