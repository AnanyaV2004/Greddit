import React from 'react'
// import LoginRegister from "./login_register"
// import Profilepage from "./Profile_page"
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Start = () => {

    // const [authenticated, setauthenticated] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const loggedInUser = JSON.parse(localStorage.getItem('login'));
    //     console.log(localStorage.getItem('login'))
    //     if (loggedInUser ==='1') {
    //     setauthenticated(loggedInUser);
    //   }
    // }, []);

    // if (authenticated==='1') {
        if(JSON.parse(localStorage.getItem('login'))==='1'){
        console.log('authenticated');
        return <Navigate replace={true} to={"/profile"} 
            state= { {
                first_name:JSON.parse(localStorage.getItem('firstnameKey')),
                last_name: JSON.parse(localStorage.getItem('lastnameKey')),
                username:JSON.parse(localStorage.getItem('usernameKey')),
                email:JSON.parse(localStorage.getItem('emailKey')),
                age:JSON.parse(localStorage.getItem('ageKey')),
                contact:JSON.parse(localStorage.getItem('contactKey')),
                password:JSON.parse(localStorage.getItem('pwdKey')),}}
        />
        // return navigate('/profile',{
        //     state: { 
        //         first_name:JSON.parse(localStorage.getItem('firstnameKey')),
        //         last_name: JSON.parse(localStorage.getItem('lastnameKey')),
        //         username:JSON.parse(localStorage.getItem('usernameKey')),
        //         email:JSON.parse(localStorage.getItem('emailKey')),
        //         age:JSON.parse(localStorage.getItem('ageKey')),
        //         contact:JSON.parse(localStorage.getItem('contactKey')),
        //         password:JSON.parse(localStorage.getItem('pwdKey')),},})
        
}

else
{console.log('not authenticated in start.js');
// console.log('authenticated:' , authenticated);
return <Navigate replace to='login_register'/>
}

// return(
//     <div>
//     {(JSON.parse(localStorage.getItem('login')) === '1')?
//         <Profilepage 
//         first_name={"firstnameKey"} last_name= {JSON.parse(localStorage.getItem('lastnameKey'))}
//         username={ JSON.parse(localStorage.getItem('usernameKey'))}
//         email={ JSON.parse(localStorage.getItem('emailKey'))}
//         age={ JSON.parse(localStorage.getItem('ageKey'))}
//         contact={ JSON.parse(localStorage.getItem('contactKey'))}
//         password={JSON.parse(localStorage.getItem('pwdKey'))} 
//         /> : <LoginRegister/>}
   
//    </div>
// )
}

  

export default Start
