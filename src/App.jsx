import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact';
import NoFoundPage from './pages/NoFoundPage/NoFoundPage';
import About from './pages/About/About';
import MainLayout from './pages/MainLayout/MainLayout';

function App() {
  const router = createBrowserRouter([{
    path: '',
    element: <MainLayout />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'portfolio',
      element: <Portfolio />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <NoFoundPage />
    },
    ]
  }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
