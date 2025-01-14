import React from 'react';
import "./TopBar.css";
export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topCenter"><ul className='topList'>
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
          </ul></div>
        <div className="topRight">
          <img className='topImg' src="./img/r.jpg" alt="" />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}
