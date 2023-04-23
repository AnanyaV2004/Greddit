import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [username,setusername] = useState('')
  const [pwd,setpwd] = useState('')
  console.log('in login page')
  const navigate = useNavigate();

  // promises to wait for set item to complete
//   const asyncLocalStorage = {
//     setItem: async function (key, value) {
//         await null;
//         return localStorage.setItem(key, value);
//     },
//     getItem: async function (key) {
//         await null;
//         return localStorage.getItem(key);
//     }
// };
// const asyncLocalStorage = {
//   setItem: async function (key, value) {
//       await Promise.resolve()
//     localStorage.setItem(key, value)
//   },
//   getItem: async function (key) {
//       return await Promise.resolve().then(function () {
//           return localStorage.getItem(key);
//       });
//   }
// };
// ............................................


  async function onClick()
  {
    
     if(username===JSON.parse(localStorage.getItem('usernameKey')) && pwd === JSON.parse(localStorage.getItem('pwdKey') ))
     { 
         var userName = username;
         var pass = pwd;
         setusername('')
         setpwd('')

        // setting local storage
        // await asyncLocalStorage.setItem('login',JSON.stringify('1')).then(function () {
        //   return asyncLocalStorage.getItem('login');
        // }).then(function (value) {
        //   console.log('Value has been set to:', value);
        // });
        // console.log('waiting for value to become ' + '1' + 
        //           '. Current value: ', localStorage.getItem('login'));

        // await asyncLocalStorage.setItem('login',JSON.stringify('1'));
        // console.log('waiting for value to become ' + '1' + 
        //             '. Current value: ', localStorage.getItem('login'));
        // const value = await asyncLocalStorage.getItem('login');
        // console.log('Value has been set to:', value);
        // // .....................

       //sending info to local storage that user logged in (used to not ask tologin again until logged out)

        localStorage.setItem('login',JSON.stringify('1'));
         console.log('logged in')
         navigate("/profile", 
         {
            state: {
              first_name: JSON.parse(localStorage.getItem('firstnameKey')),
              last_name: JSON.parse(localStorage.getItem('lastnameKey')),
              username: userName,
              email: JSON.parse(localStorage.getItem('emailKey')),
              age: JSON.parse(localStorage.getItem('ageKey')),
              contact: JSON.parse(localStorage.getItem('contactKey')),
              password: pass,
          },
         }
         )
     } 
     
     else{
      setusername('')
         setpwd('')
         alert('Invalid Username or Password')
     }
  }
  return (
    <section className="vh-100 Login_box" id="pills-login">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{color:'#9A616D'}}></i>
                        <span className="h1 fw-bold mb-0">GReddit</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <input type="text" id="form2Example17" className="form-control form-control-lg" value={username} onChange={(e) => setusername(e.target.value)}/>
                        <label className="form-label" htmlFor="form2Example17">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" value={pwd} onChange={(e) => setpwd(e.target.value)} />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={onClick}>Login</button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
