import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import TaskContext from "../context/TaskContext";
import { useContext } from "react";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import { Task } from "../types/TaskType";
import { v4 as uuidv4 } from 'uuid';
import Chart from "./Chart";

const KanbanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    min-width: 52rem;
    height: 100vh;
    background-color: ${theme.getColor('background')};
`;

const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 52rem;
    height: 3.375rem;
    padding: 0 1.5rem;
    background-color: white;
    color: ${theme.getColor('black', 0.6)};
    border-bottom: 1px solid ${theme.getColor('lightGreen')};

    h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    img {
        height: 2.5rem;
    }

    button {
        background-color: ${theme.getColor('olive')};
        color: white;
        border: none;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        cursor: pointer;

        :hover {
            background-color: ${theme.getColor('olive', 0.85)};
        }
    }   
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-width: 52rem;
    height: calc(100% - 3.375rem);
    padding: 2rem;
    gap: 1.5rem;
    overflow-y: auto;
`;

const ColumnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    flex: 1;
    min-width: 52rem;
`;

const ChartContainer = styled.div`
    flex: 1;
    min-width: 300px;
    max-width: 500px;

    color: ${theme.getColor('black', 0.6)};
`;

const Kanban = () => {
    const { onDragEnd, addTask, tasks } = useContext(TaskContext);

    const handleAddTask = () => {
        const newTask = {
            id: uuidv4(),
            title: 'Nova tarefa',
            description: 'Descrição da nova tarefa',
            status: 'pending',
        }
        addTask(newTask as unknown as Task);
    }

    const getTaskCount = (status: string) => {
        return tasks.filter(task => task.status === status).length;
    }

    return (
        <KanbanContainer>
            <Nav>
                <img src="cotefacil.png" alt="Cotefacil logo" />
                <h1>Dashboard de Tarefas</h1>
                <button onClick={handleAddTask}>Adicionar tarefa</button>
            </Nav>

            <DragDropContext onDragEnd={onDragEnd}>
                <Container>
                    <ColumnsContainer>
                        <Column id="pending" title={`Pendente (${getTaskCount('pending')})`} />
                        <Column id="in_progress" title={`Em progresso (${getTaskCount('in_progress')})`} />
                        <Column id="completed" title={`Concluída (${getTaskCount('completed')})`} />
                    </ColumnsContainer>
                    <ChartContainer>
                        <Chart />
                    </ChartContainer>
                </Container>
            </DragDropContext>
        </KanbanContainer>
    )
}

export default Kanban;