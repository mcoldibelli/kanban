import {Task} from "../types/TaskType.tsx";
import {FC} from "react";

type TaskProps = {
    task: Task;
    updateTask: (id: number, updatedTask: Partial<Task>) => void;
    deleteTask: (id: number) => void;
}

const TaskItem: FC<TaskProps> = ({task, updateTask, deleteTask}) => {
    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value as Task['status'];
        updateTask(task.id, { status: newStatus });
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <label>
                Status:
                <select value={task.status} onChange={handleStateChange}>
                    <option value="pending">Pendente</option>
                    <option value="in_progress">Em progresso</option>
                    <option value="completed">Completo</option>
                </select>
            </label>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TaskItem;