import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Abouts from './components/About/Abouts';
import Home from './components/Home/Home';
import Orders from './components/Order/Orders';
import Main from './Layout/Main';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[{
        path:'/',
        loader:()=> fetch('tshart.json'),
        element:<Home></Home>
      },
      
      {
        path:'/Orders',
        element:<Orders></Orders>
      },
      {
        path:'/Abouts',
        element:<Abouts></Abouts>
      }
    ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

     
    </div>
  );
}

export default App;
