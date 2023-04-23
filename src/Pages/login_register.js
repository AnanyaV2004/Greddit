import { useState } from "react"
import Register from "./Register"
import Login from "./Login"
import { useNavigate } from "react-router-dom"

const LoginRegister = () => {
  let [login, login_present] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="login_register">
      
       <ul className="nav nav-pills nav-justified mb-3" htmlid="ex1" htmlrole="tablist" style={{backgroundColor:'black'}}>
   <li className="nav-item" htmlrole="presentation">
     <button className="btn btn-large" onClick={()=>login_present(true)} style={{color:'white', fontSize:30}}> Login </button>   
   </li>
   <li className="nav-item" htmlrole="presentation">  
   <button className="btn btn-large" onClick={()=>login_present(false)} style={{color:'white', fontSize:30}}> Register </button>
   </li>
 </ul>
{login ? <Login/> : <Register/>}

    </div>
  )
}

export default LoginRegister
