import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Layout from './components/Layout'
import Home from './pages/Home'
import TaxPlus from './pages/TaxPlus'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="taxplus" element={<TaxPlus />} />
            {/* Outras rotas entrarão aqui */}
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
