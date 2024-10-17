import './App.css';
import HomePage from './components/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/watchPage';
import Layout from './components/Layout';

function App() {
  let routes = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/watch',
        element: <WatchPage />

      }
    ]
  }])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
