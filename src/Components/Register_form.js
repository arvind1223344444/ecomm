import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import {user_register_api ,  user_login_api} from '../Api_path';
function Register_form() {


const [name , setname]=useState('');
const [email , setemail]=useState('');
const [password , setpassword]=useState('');

const [useremail , setuseremail]=useState('');
const [userpassword , setuserpassword]=useState('');

const navigate = useNavigate();

const register = async(e)=>{
e.preventDefault();


const data  = {
name:name,
email:email,
password:password
};

const reslt = await axios.postForm(`${user_register_api}`,data)
if(reslt.data.status===true)
{
    alert(reslt.data.response);

    setname('');
    setemail('');
    setpassword('');
}
else
{
  alert(reslt.data.response);
}

}


const login= async (e)=>{
e.preventDefault();

const login_data = {

    user_email:useremail,
    user_password:userpassword
}

const resit = await axios.postForm(`${user_login_api}` , login_data)
if(resit.data.cred==="1")
{

    localStorage.setItem('userid', resit.data.response);   
    
    localStorage.setItem('username', resit.data.usr_name);   
    
    setuseremail('');
    setuserpassword('');
    window.location.href="";
  



}
else
{
    alert(resit.data.response)
}




}




  return (
<>
<div className="main-content-wrap section-ptb lagin-and-register-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 col-md-12 m-auto">
        <div className="login-register-wrapper">
          {/* login-register-tab-list start */}
          <div className="login-register-tab-list nav" role="tablist">
            <a
              className="active"
              data-bs-toggle="tab"
              href="#lg1"
              aria-selected="true"
              role="tab"
            >
              <h4> login </h4>
            </a>
            <a
              data-bs-toggle="tab"
              href="#lg2"
              aria-selected="false"
              role="tab"
              className=""
              tabIndex={-1}
            >
              <h4> register </h4>
            </a>
          </div>
          {/* login-register-tab-list end */}
          <div className="tab-content">
            <div id="lg1" className="tab-pane active show" role="tabpanel">
              <div className="login-form-container">
                <div className="login-register-form">
                  <form onSubmit={login}>
                    <div className="login-input-box">
                      <input
                        type="email"
                      
                        name="user-name"
                        placeholder="User Email"
                        value={useremail}
                        onChange={(e)=>{setuseremail(e.target.value)}}
                      />

                   
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Password"
                        value={userpassword}
                        onChange={(e)=>{setuserpassword(e.target.value)}}
                      />
                    </div>
                    <div className="button-box">
                      <div className="login-toggle-btn">
                        <input type="checkbox" />
                        <label>Remember me</label>
                        <a href="#">Forgot Password?</a>
                      </div>
                      <div className="button-box">
                        <button className="login-btn btn" type="submit">
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="lg2" className="tab-pane" role="tabpanel">
              <div className="login-form-container">
                <div className="login-register-form">
                  <form onSubmit={register}>
                    <div className="login-input-box">
                      <input
                        type="text"
                        name="user-name"
                        placeholder="User Name"
                        onChange={(e)=>{setname(e.target.value)}}
                        value={name}
                      />
                  
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Password"
                        onChange={(e)=>{setpassword(e.target.value)}}
                        value={password}
                      />
                      <input
                        name="user-email"
                        placeholder="Email"
                        type="email"
                        onChange={(e)=>{setemail(e.target.value)}}
                        value={email}
                      />
                    </div>
                    <div className="button-box">
                      <button className="register-btn btn" type="submit">
                        <span>Register</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Register_form