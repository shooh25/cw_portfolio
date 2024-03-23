import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useEffect } from 'react'
import Top from './pages/Top'
import Works from './pages/Works'
import About from './pages/About'
import Wrapper from './components/Wrapper'

const App: React.FC = () => {
  const queryClient = new QueryClient();

  // ページ遷移時に上部へスクロール
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App