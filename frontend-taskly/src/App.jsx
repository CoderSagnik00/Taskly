import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About'

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
