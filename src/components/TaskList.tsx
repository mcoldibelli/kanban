import {FC, useContext} from 'react';
import TaskItem from './TaskItem';
import {Task} from "../types/TaskType.tsx";
import TaskContext from "../context/TaskContext.tsx";

const TaskList:FC = () => {
    const {tasks, updateTask, deleteTask } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks.map((task: Task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};
export default TaskList;