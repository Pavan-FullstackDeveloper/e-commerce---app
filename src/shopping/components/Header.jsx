import React from 'react'

const Header = () => {
  return (
    <div className="header-section">
         <div className="first">
            <div className="title">
                <h1>Life Style</h1>
            </div>
         </div>
         <div className="second">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Children</li>
                <li>Beauty</li>
                <li>More</li>
            </ul>
         </div>
         <div className="third">
            <div className="searchInput">
                <input type="text" placeholder="Search"/>
            </div>
         </div>
         <div className="fourth">
         <div className="cart">
                Cart
            </div>
            <div className="sign-in">
                <h4>Singin/Signup</h4>
                <img src="Banners/profile.png" alt="icon" />
            </div>
           
         </div>
    </div>
  )
}

export default Header