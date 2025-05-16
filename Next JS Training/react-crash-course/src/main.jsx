import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Post, {loader as postLoader}from './routes/Post'
import NewPost, {action as newPostAction } from './routes/NewPost';
import PostDetails,{ loader as postDetailsLoader} from './routes/PostDetails';
import RootLayout from './routes/RootLayout'; 
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children: [
      {
        path:'/', 
        element: <Post/>, 
        loader: postLoader,
        children: [
          { path: '/create-posts', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />,loader: postDetailsLoader },  
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
