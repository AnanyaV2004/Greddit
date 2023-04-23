import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Register = () => {  
  const navigate = useNavigate();

      // declaring state variables for data
      const [Firstname, setfirstname] = useState()
      const [Lastname, setlastname] = useState()
      const [Username, setusername] = useState()
      const [Email, setemail] = useState()
      const [Age, setage] = useState()
      const [Contact, setcontact] = useState()
      const [Password, setpassword] = useState()
      // ....................................

      const register= () => {

        if (!Username || !Password) {
            alert('Username and Password fields as necessary to sign up');
            return
        }

        else
        {
        localStorage.setItem('firstnameKey', JSON.stringify(Firstname));
        localStorage.setItem('lastnameKey', JSON.stringify(Lastname));
        localStorage.setItem('usernameKey', JSON.stringify(Username));
        console.log(JSON.parse(localStorage.getItem('usernameKey')));
        localStorage.setItem('emailKey', JSON.stringify(Email));
        localStorage.setItem('ageKey', JSON.stringify(Age));
        localStorage.setItem('contactKey', JSON.stringify(Contact));
        localStorage.setItem('pwdKey', JSON.stringify(Password));
          navigate('/Login')
        }
    }
  
  return (
    <div className="Register">
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }} id="pills-register">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="first_name" className="form-control" value={Firstname} onChange={(e) => setfirstname(e.target.value)} />
                          <label className="form-label" for="first_name">First Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="last_name" className="form-control" value={Lastname} onChange={(e) => setlastname(e.target.value)} />
                          <label className="form-label" for="last_name">Last Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-users fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="username" className="form-control" value={Username} onChange={(e) => setusername(e.target.value)} />
                          <label className="form-label" for="username">Username</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="email" className="form-control" value={Email} onChange={(e) => setemail(e.target.value)}/>
                          <label className="form-label" for="email">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-child fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="number" id="age" className="form-control" value={Age} onChange={(e) => setage(e.target.value)} />
                          <label className="form-label" for="age">Your Age</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="number" id="contact" className="form-control" value={Contact} onChange={(e) => setcontact(e.target.value)} />
                          <label className="form-label" for="contact">Your Contact Number</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="pwd" className="form-control" value={Password} onChange={(e) => setpassword(e.target.value)}/>
                          <label className="form-label" for="pwd">Password</label>
                        </div>
                      </div>


                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-dark btn-lg" onClick={register}>Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://img.freepik.com/free-vector/man-working-using-laptop-flat-design_1308-102458.jpg?w=360"
                      className="img-fluid" alt="Sign-up" style={{ padding: 100 }} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Register
