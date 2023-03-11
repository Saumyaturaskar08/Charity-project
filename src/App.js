import logo from './logo.svg';
import './css/login.css';
import Create from "./components/create"
import Forgot from "./components/forgot"
import Login from "./components/login"
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <>
      
        <Routes>
        
          <Route path='/create' element={<Create/>} />
            
         <Route path='/forgot' element={<Forgot/>} />

         <Route exact path='/' element={<Login/>} />
        
        </Routes>
     

</>
);
}

export default App;
