import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Videos from './pages/Videos';
import VideosDetail from './pages/VideosDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos', element: <Videos /> },
      { path: '/videos/:videoId', element: <VideosDetail /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <div>App</div>
    </RouterProvider>
  );
}
