import Kanban from "./components/Kanban"
import { TaskProvider } from "./context/TaskContext"
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>

    </>
    </ThemeProvider>
  )
}

export default App
