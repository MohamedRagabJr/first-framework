import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Portfolio from './component/Portfolio/Portfolio'
import Layout from './component/Layout'
import NotFound from './component/NotFound'

let x = createBrowserRouter([
        {path: "" , element: <Layout/> , children: [
          {path: "/" , element: <Home />},
          {path: "About", element: <About />},
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
