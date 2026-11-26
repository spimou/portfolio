import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layout/MainLayout'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import PoCPage from './pages/PoCPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'poc', element: <PoCPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

function App() {
  return <RouterProvider router={router} />
}

export default App
