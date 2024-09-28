import TaskItem from "./components/TaskItem.tsx";
import {tasks} from "./data/database.ts";

function App() {
  return (
    <>
        <TaskItem task={tasks[0]} />
    </>
  )
}

export default App
