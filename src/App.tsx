import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import Top from './pages/Top'
import Works from './pages/Works'
import About from './pages/About'
import Wrapper from './components/Wrapper'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import SubmitSuccess from './pages/SubmitSuccess'
import NotFound from './pages/NotFound'

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
      <AnimatePresence mode='wait'>
        <BrowserRouter>
          <ScrollToTop />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Top />}></Route>
              <Route path="/works" element={<Works />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/works/:contentId" element={<Detail />}></Route>
              <Route path="/submit-success" element={<SubmitSuccess />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </AnimatePresence>
    </QueryClientProvider>

  )
}

export default App