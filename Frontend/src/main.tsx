import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root'
import { action as deleteAction } from './routes/Delete';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Error!</div>,
    children: [
      { index: true, element: <div>Index Page!</div> },
      {
        path: 'boards/:boardId',
        element: <div>This is a specific board!</div>,
      },
      {
        path: 'edit/boards/',
        element: <div>A list of boards!</div>,
      },
      {
        path: 'edit/boards/:boardId',
        element: <div>Editing a sepcific board</div>,
      },
      {
        path: 'boards/:boardId/delete',
        action: deleteAction,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
