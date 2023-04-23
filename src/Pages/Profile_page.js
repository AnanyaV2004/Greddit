import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
// import AsyncLocalStorage from '@createnextapp/async-local-storage'

const Profilepage = ({ first_name, last_name, username, email, age, contact, password}) => {

    const location = useLocation();
    const [authenticated, setauthenticated] = useState(null);
    // const navigate = useNavigate();

//   useEffect(() => {
//     console.log('went to useEffect');
//     async function fetchData() {
//         const response = await JSON.parse(AsyncLocalStorage.getItem('login'));
//         console.log('went into fetch data in use effect'+' response: '+response);
//         return response;
//       }
//     const loggedInUser = fetchData();
//     // if (loggedInUser ==='1') {
//     setauthenticated(loggedInUser);
// //   }
// }, []);
console.log('profile page',username);
    if(username === undefined)
    {// getting values that we passwed while navigating to this page
    first_name = location.state.first_name;
    last_name = location.state.last_name;
    username = location.state.username;
    console.log('profile page',username);
    email = location.state.email;
    age = location.state.age;
    contact = location.state.contact;
    password = location.state.password;
    // .............................................................
    }
    // console.log('profile page',username);

    // declaring state variables for data
    const [Firstname, setfirstname] = useState(first_name)
    const [Lastname, setlastname] = useState(last_name)
    const [Username, setusername] = useState(username)
    const [Email, setemail] = useState(email)
    const [Age, setage] = useState(age)
    const [Contact, setcontact] = useState(contact)
    const [Password, setpassword] = useState(password)
    // ....................................

    // // all these will change value of states in the local storage also whenever the state passed at the end in [] brackets changes
    // useEffect(() => {
    //     localStorage.setItem('firstnameKey', JSON.stringify(Firstname));
    //   }, [Firstname]);

    //   useEffect(() => {
    //     localStorage.setItem('lastnameKey', JSON.stringify(Lastname));
    //   }, [Lastname]);

    //   useEffect(() => {
    //     localStorage.setItem('usernameKey', JSON.stringify(Username));
    //   }, [Username]);

    //   useEffect(() => {
    //     localStorage.setItem('emailKey', JSON.stringify(Email));
    //   }, [Email]);

    //   useEffect(() => {
    //     localStorage.setItem('ageKey', JSON.stringify(Age));
    //   }, [Age]);

    //   useEffect(() => {
    //     localStorage.setItem('contactKey', JSON.stringify(Contact));
    //   }, [Contact]);

    //   useEffect(() => {
    //     localStorage.setItem('pwdKey', JSON.stringify(Password));
    //   }, [Password]);
    // // ..............................................................................................................................


    const onSubmit = (e) => {
        e.preventDefault()

        if (!Username) {
            alert('Please add a Username')
            return
        }
    }
    // const [profile, setprofile] = useState({
    //     Firstname: first_name,
    //     Lastname: last_name,
    //     Username: username,
    //     Email: email,
    //     Age: age,
    //     Contact: contact
    // });
    // let [Password, setpassword] = useState(password)
 
    // if (authenticated!=='1') {
    //     return <Navigate replace to="/" />;
    //   }

    //   else
    //   {
    return (
           
        <div className='profile'>
              {console.log(Username)}
            {console.log('reached')}
             <Navbar/>
            <div className="container emp-profile">
                {/* <form method="post"> */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row profile_heading">
                        Profile
                        </div>
                        <div className="row">
                            <div className="profile-head">
                                <h5>
                                    {Firstname} {Lastname}
                                </h5>
                                <h6 style={{ color: '#9A616D' }}>
                                    {Username}
                                </h6>

                                {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>FOLLOWERS</p>
                            {/* <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a> */}
                            <p>FOLLOWING</p>
                            {/* <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/> */}
                        </div>
                    </div>
                    <div className="col-md-8">

                        <form onSubmit={onSubmit}>
                            <div className="tab-content profile-tab">
                                <div>
                                    <label>User Id</label>
                                    <input type='text' value={Username} onChange={(e) => setusername(e.target.value)} />
                                </div>

                                <div >
                                    <label>First Name</label>
                                    <input type='text' value={Firstname} onChange={(e) => setfirstname(e.target.value)} />
                                </div>

                                <div >
                                    <label>Last Name</label>
                                    <input type='text' value={Lastname} onChange={(e) => setlastname(e.target.value)} />
                                </div>

                                <div>
                                    <label>Email Id</label>
                                    <input type='email' value={Email} onChange={(e) => setemail(e.target.value)} />
                                </div>

                                <div  >
                                    <label>Age</label>
                                    <input type='text' value={Age} onChange={(e) => setage(e.target.value)} />
                                </div>

                                <div>
                                    <label>Contact Number</label>
                                    <input type='text' value={Contact} onChange={(e) => setcontact(e.target.value)} />
                                </div>

                                <div>
                                    <label>Password</label>
                                    <input type='password' value={Password} onChange={(e) => setpassword(e.target.value)} />
                                </div>
                            </div>
                            
                            <input className='submit btn-block btn col-md-10' type='submit' value='Save Changes' />
                            {/* <div className="col-md-6">
                                                <p>admin@123</p>
                                            </div> */}
                            {/* </div> */}
                            {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Kshiti Ghelani</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>kshitighelani@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div> */}
                            {/* </div> */}
                        </form >
                        {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div> */}

                    </div >
                </div >
                {/* </form > */}
            </div >
        </div >
    )
                        }
                    // }



// Profilepage.defaultProps = {
        // // getting values that we passwed while navigating to this page
        // first_name : location.state.first_name,
        // last_name : location.state.last_name,
        // username : location.state.username,
        // email : location.state.email,
        // age : location.state.age,
        // contact : location.state.contact,
        // password : location.state.password,

    // first_name: 'Ananya',
    // last_name: 'vaibhavi',
    // username: 'anivaibh',
    // email: 'anivaibh24@gmail.com',
    // age: '19',
    // contact: '1234567896'
// }

export default Profilepage
