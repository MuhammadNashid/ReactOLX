import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Nav.css'


const Nav = ({user,setFilter}) => {
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
      {/* Left Section */}
      <div className="nav-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <select className="loca">
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>

      {/* Center Section */}
      <div className="nav-center">
        <input
          type="text"
          className="search-input"
          placeholder="Find Cars, Mobile Phones and more..."
          onChange={(e) => setFilter(e.target.value)}
        />

      </div>

      {/* Right Section */}
      <div className="nav-right">
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
        <Link to={"/sell"}>
        <button className="sell-button">
      + SELL
    </button>
    </Link>
      </div>
    </nav>
  );
};

export default Nav;