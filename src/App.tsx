import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Top from './pages/Top'
import Works from './pages/Works'
import About from './pages/About'
import Wrapper from './components/Wrapper'

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </QueryClientProvider>

  )
}

export default App