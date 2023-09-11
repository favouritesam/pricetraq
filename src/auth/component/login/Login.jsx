import React, { useState } from "react";
import axios from "axios";
import "./login.css";



const Login = () => {
  const initialState = {
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

  const handleLogin = async (e) => {
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
        <form onSubmit={handleLogin }>
          <div className="Login-Container">
            <img src={pricetraq} alt=""/>
            <h3>LOGIN</h3>
          </div>
        
          <div className="zoo">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="zoo">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            </div>
            
          <div className="signbtn">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;