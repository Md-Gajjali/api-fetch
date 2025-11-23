import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import SerVice from './pages/SerVice.jsx';
import ConTact from './pages/ConTact.jsx';
import RootLayout from './RootLayout.jsx';
import { AppProvider } from './ContextApi.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },{
//     path: "/About",
//     element: <About />,
//   },{
//     path: "/Service",
//     element: <SerVice />,
//   },{
//     path: "/Contact",
//     element: <ConTact />,
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "Home", element: <App /> },
      { path: "About", element: <About /> },
      { path: "Service", element: <SerVice /> },
      { path: "Contact", element: <ConTact /> },
    ],
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider.Provider value={"anara"} >
      <RouterProvider router={router} />
    </AppProvider.Provider>
  </StrictMode>,
)
