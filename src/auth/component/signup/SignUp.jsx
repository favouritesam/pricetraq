import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import image from '../../../assets/images/facebook.jpg'
import google from '../../../assets/images/gooo.jpg'
import pricetraq from '../../../assets/images/logo.jpg'


const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  
  };
  const [formData, setFormData] = useState(initialState);
  const [error,setError]= useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  


  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null)
    try{
    const response = await axios.post("http://localhost:8080/api/",formData)
    console.log(response.data)
  }catch(error){
    setError("An error just occured")
    console.log(error)
  }
}

  return (
    <div className="page-container">

      <div id="form-class">
        <form onSubmit={handleSignup}>
          <div className="SignUp-Container">
            <img src={pricetraq} alt=""/>
            <h3>SIGN UP</h3>
          </div>
          

          <div className="hoo">
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="hoo">
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        

          <div className="hoo">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="hoo">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            </div>
            <div className="ptag">
                <a href=""> <p> Already a user? <span>Login</span></p></a>

            </div>
            
          <div className="signbtn">
            <button className="btn" type="submit">
              Signup
            </button>
          </div>
          <div className="pbaby">
          <p>
          Or sign up with 
          </p>
          </div>
          <div className="pix">
            <a href="https://www.facebook.com/"><img src={image} alt="" /></a>
            <a href="https://www.google.com/"><img src={google} alt="" /></a>
          </div>
          
        
        </form>
      </div>
    </div>
  );
};

export default Signup;





