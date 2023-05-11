import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ChatPage from './components/ChatPage';
import Layout from './components/Layout';

declare global {
  interface Window {
    Scaledrone: any;
    drone: any;
    room: any;
  }
}

window.drone = new window.Scaledrone('nmTU30F9hv1pE76b');

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
