import React, { useState } from "react";
import "../register/register.css";
import { loginUserApi, registerUserApi, updateUserApi } from "../service/UserService";
import { useNavigate, useParams } from "react-router";
import { RxCrossCircled } from "react-icons/rx";

function Login({ onLogin }) {

  const params = useParams()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const [isLoginForm, setIsLoginForm] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const handleUserName = (e) => {
    setUserData({ ...userData, userName: e.target.value });
  };

  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const registerUser = async () => {
    let response = await registerUserApi(formData);
    setAlertMessage(response)
    // ; // Call the onLogin function passed as a prop to notify the parent component
  };
  
  const loginUser = async () => {    
    let response = await loginUserApi(formData);
    setAlertMessage(response.message)
    if(response.status){
      localStorage.setItem("isConnected", true);
      localStorage.setItem("user", response.userName);
      onLogin()
    }
  };

  const updateUser = async()=>{
    let response = await updateUserApi(formData);
    if (response.data) {
      setAlertMessage("Profile Updated Successfully")
      setTimeout(()=>{
        navigate('/')
      },1000)
    }else{
      setAlertMessage("Enter Your Valid Email")
    }
    
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    isLoginForm ? loginUser() : params.update ==null ? registerUser() : updateUser();;
    if(alertMessage === "User Registered Successfully!") {
      setFormData({ userName: "", email: "", password: "",phoneNumber:"",role:"" });
    }
    setTimeout(()=>{
      setAlertMessage('')
    },1000)
  }

  function handleBack(){
    navigate('/')
  }

  return (
    <>
    {params.update !=null ? <RxCrossCircled onClick={handleBack} id="cross-icon-update"/> : null}
    
      <div className="register-form-main-container">
        <div className="register-form-sub-container">
          <form action="" onSubmit={handleSubmit}>
            <div className="register-form-inner-container">
              <h1 className="register-tagline">
                {isLoginForm ? "Login" : params.update==null ? "Signup Here" : 'Update Profile'}
              </h1>
              {isLoginForm ? (
                ""
              ) : (
                <input
                  type="number"
                  maxLength={10}
                  minLength={10}
                  placeholder="Enter your phone"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  required
                />
              )}
              {isLoginForm ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter Your username"
                  value={formData.userName}
                  onChange={handleChange}
                  name="userName"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                required
              /> 
              <input
                type="password"
                placeholder={
                  isLoginForm ? "Enter Your password" : "Create a password"
                }
                onChange={handleChange}
                value={formData.password}
                name="password"
                required
              />
              {isLoginForm ? (
                ""
              ) : (
                <select name="role" id="role" onChange={handleChange} required>
                  <option>Select role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="institute">Institute</option>
                </select>
              )}
              <button id="register-form-btn">Submit</button>
              <p id="login-message">{alertMessage}</p>
            </div>
          </form>
          {params.update ==null ? 
          <span>
            Click here to{" "}
            <button
              className="is-login-btn"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm ? "Signup" : "Login"}
            </button>
          </span> : null }
        </div>
      </div>
    </>
  );
}

export default Login;
