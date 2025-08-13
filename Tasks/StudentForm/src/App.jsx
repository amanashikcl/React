import { BrowserRouter, Routes, Route } from 'react-router'
import Form from './pages/form'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
