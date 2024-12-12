import React, { useState } from "react"
import "./Verify.css"
import axios from 'axios'

const Verify = () => {
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      console.log(email)
      const res=await axios.post("http://localhost:3009/api/verify",{email})
      console.log(res)
      if (res.status==200) {
        alert(res.data.msg)
        localStorage.setItem('email', email)
      }else{
        alert(res.data.msg)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
<div className="email">
<h2 className="h2">Email Verification</h2>
<form onSubmit={handleSubmit}>
  <div className="form6-group">
    <input className="infor" type="email" id="email" name="email"  value={email}  onChange={handleChange} placeholder="Enter your email" />
  </div>
  <button type="submit" className="btnv">Verify</button>
</form>
</div>
);
};

export default Verify