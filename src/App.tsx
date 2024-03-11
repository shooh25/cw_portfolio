import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from './pages/Top'
import Works from './pages/Works'
import About from './pages/About'
import Wrapper from './components/Wrapper'

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>

  )
}

export default App