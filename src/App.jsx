import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Products from './pages/Products/Products'
import Layout from './component/Layout'
import NotFound from './component/NotFound'

let x = createBrowserRouter([
        {path: "" , element: <Layout/> , children: [
          {path: "/" , element: <Home />},
          {path: "About", element: <About />},
          {path: "Products", element: <Products />},
          {path: "Portfolio", element: <Portfolio />},
          {path: "Contact", element: <Contact />},
          {path: "*", element: <NotFound />},
          ],
        }
      ])
function App() {

  return (
    <>
    <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
