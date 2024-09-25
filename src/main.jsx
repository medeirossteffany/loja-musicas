import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Musicas from './routes/Musicas.jsx';
import Login from './routes/Login.jsx';
import Sobre from './routes/Sobre.jsx';
import Cadastro from './routes/Cadastro.jsx';

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Elementos Filhos

    children:[
      {path:'/',element:<Home/>},
      {path:'/musica',element:<Musicas/>},
      {path:'/login',element:<Login/>},
      {path:'/sobre',element:<Sobre/>},
      {path: '/cadastro',element:<Cadastro/>}
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)