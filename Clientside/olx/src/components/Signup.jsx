import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email:localStorage.getItem('email') ||"",
    pwd: "",
    cpwd: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);
    
    try {
      const res=await axios.post("http://localhost:3005/api/adduser",formData)
      if (res.status === 201) {
        alert(res.data.msg);
        localStorage.removeItem("email");
        navigate('/login');
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
    }
 };

  return (
    <div className="register-page">
    <div className="register-container">
      <div className="register-header">
        <h1>olx</h1>
      </div>
      <form onSubmit={handleSubmit} method="post">
        <div className="forms-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="forms-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="forms-group">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>
        <div className="forms-group">
          <input
            type="password"
            name="pwd"
            value={formData.pwd}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="forms-group">
          <input
            type="password"
            name="cpwd"
            value={formData.cpwd}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="con1">
        People who use our service may have uploaded your contact information to Instagram.<span className="le2"> Learn More</span>
        </div>
        <div className="con2">
        By signing up, you agree to our <span className="le2"> Terms , Privacy Policy</span> and <span className="le2"> Cookies Policy .</span>
        </div>
        <button type="submit" className="btn-submit">
          Sign up
        </button>
      </form>
    </div>
  </div>
)
}

export default Signup