import { BrowserRouter, Routes, Route } from "react-router"
import TodoList from "./pages/TodoList"
import String from "./pages/String"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/todo" Component={TodoList} />
            <Route path="/string" Component={String} />
        </Routes>
    </BrowserRouter>
}

export default App