import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import NoFoundPage from './pages/NoFoundPage';
import About from './pages/About';
import MainLayout from './pages/MainLayout';

function App() {
  const router = createBrowserRouter([{
    path: 'startFramework',
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
