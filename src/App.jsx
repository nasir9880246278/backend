import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Register} from "./pages/register"
import { Login } from "./pages/login";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Getcontact } from "./pages/Getcontact";
import { Update } from "./pages/Update";
import { Logout } from "./pages/Logout";

const App=()=>{
  return <>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={< Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/getcontact" element={<Getcontact/>}/>
    <Route path="/update/:id" element={<Update/>}/>
    <Route path="/logout" element={<Logout/>}/>
    
    </Routes>
  
  </BrowserRouter>
  
  
  </>
}

export default App;