import Homepage from './homepage/Homepage';
import Login from './Login/Login'
import Register from './Register/Register'
import {BrowserRouter, Routes, Route} from "react-router";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
