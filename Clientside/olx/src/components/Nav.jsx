import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Nav.css'


const Nav = ({user}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = (event) => {
    event.stopPropagation()
    setIsDropdownVisible((prevState) => !prevState)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownVisible(false)
      }
    }

    window.addEventListener("click", handleOutsideClick)
    return () => {
      window.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    alert("Logout Successfully")
    navigate("/login")
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="search1-bar">
           <select className="loca">     
            <option value="india">INDIA</option>         
            <option value="usa">USA</option>
          <option value="uk">UK</option>
         </select>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Find Cars, Mobiles and more..."
            className="search-input"
          />
          
        </div>
        
        <div className="cont">
        <div className="eng">  
        <select className="engs">
            <option value="">ENGLISH</option>
            <option value="">हिन्दी</option>
        </select>
        </div>
       
        <div className="profile-icon"></div>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">{user}</button>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <a href="/profile">Profile</a>
              <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </a>
            </div>
          )}
        </div>
      <button className="sell"><Link><span className="plu">+</span>SELL</Link></button>
   </div>
       
      </div>
    </nav>
  );
};

export default Nav;