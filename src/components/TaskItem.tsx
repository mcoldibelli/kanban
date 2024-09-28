import {Task} from "../types/TaskType.tsx";
import {FC} from "react";

type TaskProps = {
    task: Task;
}

const TaskItem: FC<TaskProps> = ({task}:TaskProps) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <label>
                Status:
                <select>
                    <option value="pending">Pendente</option>
                    <option value="inProgress">Em progresso</option>
                    <option value="completed">Completo</option>
                </select>
            </label>
        </div>
    );
}

export default TaskItem;