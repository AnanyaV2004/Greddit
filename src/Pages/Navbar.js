import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const Logout =()=>
  {
    localStorage.setItem('login',JSON.stringify('0')) //sending info to local storage that user logged out (used to not ask to login again until logged out)
      navigate('/')
  }

  return (
    <div className='Navbar'>
     <header>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-0">
    <div className="container">
      {/* <a className="navbar-brand" href="#!"><span style="color: #5e9693;">Psycho</span><span style="color: #fff;">logist</span></a> */}
      <div className="d-flex align-items-center mb-3 pb-1 col-md-3">
                        <i className="fas fa-cubes fa-2x me-3" style={{color:'#9A616D'}}></i>
                        <span className="h1 fw-bold mb-0">GReddit</span>
                      </div>
      {/* <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item col-md-4">
            <a className="nav-link" href="/profile" style={{margin:0, padding:0}}><i className="fas fa-user-circle" style={{margin:0, padding:0, color:'#9A616D'}}> Profile</i></a>
          </li>
          <li className="nav-item col-md-6">
            <a className="nav-link" href="#!" style={{margin:0, padding:0}}><i className="fa-solid fa-users-rectangle" style={{margin:0, padding:0, color:'#9A616D'}}> My Sub Greddits</i></a>
          </li>
          <li className="nav-item col-md-5">
            <a className="nav-link" href="#!" style={{margin:0, padding:0}}><i className="fa-solid fa-users-rays" style={{margin:0, padding:0, color:'#9A616D'}}> Sub Greddits </i> </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#!">Reference</a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#!">About</a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#!">Team</a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#!">Contact</a>
          </li> */}
        </ul>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3 me-lg-0">
            {/* <a className="nav-link" href="#!">
              <i className="fas fa-shopping-cart"></i>
            </a> */}
            <button className="btn submit btn-lg" onClick={Logout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>
    </div>
  )
          }


export default Navbar
