import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';

// Routes for the app
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:post_id",
    element: <PostDetail />
  },
  {
    path: "/create",
    element: <CreatePost />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
