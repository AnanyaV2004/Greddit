import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import LoginRegister from './Pages/login_register'
import Profilepage from './Pages/Profile_page'
import Navbar from './Pages/Navbar'
import Start from './Pages/start'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path = "/login_register" element={<LoginRegister />} />
        <Route path="/profile" element={<Profilepage/>}/>
        <Route path="/" element={<Start />}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
