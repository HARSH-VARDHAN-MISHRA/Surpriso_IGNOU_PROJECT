import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle, setSideToggle] = useState(false)
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  const handletoggleBtn = () => {
    setSideToggle(!sidetoggle)
  }
  useEffect(()=>{
 setLogin(sessionStorage.getItem("login"))
  },[])

  const logout =()=>{
    sessionStorage.clear()
    navigate("/")
    window.location.reload()
  }
  return (
    <>
      {
        login ?
          <header>
            <div className="top-head">
              <div className="right">
                <h2>Surpriso</h2>
                <div className="bar" onClick={handletoggleBtn}>
                  <i class="fa-solid fa-bars"></i>
                </div>
              </div>
              <div className="left">
                <a href="" target="_blank">
                  <i class="fa-solid fa-globe"></i>
                  Go To Website
                </a>

                <div className="logout" onClick={logout}>
                  Log Out <i class="fa-solid fa-right-from-bracket"></i>
                </div>
              </div>

            </div>

            <div className={`rightNav ${sidetoggle ? "active" : ""} `}>
              <ul>
                <li><Link to="/dashboard" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Dashboard</Link></li>
                <li><Link to="/all-banners" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Banners</Link></li>
                <li><Link to="/all-category" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Category</Link></li>
                <li><Link to="/all-products" onClick={handletoggleBtn}> <i class="fa-solid fa-layer-group"></i> Manage Product</Link></li>
                <li><Link to="/all-newsletter" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Newsletter</Link></li>
                <li><Link to="/all-users" onClick={handletoggleBtn}> <i class="fa-solid fa-user"></i> All Users</Link></li>
                <li><Link to="/all-orders" onClick={handletoggleBtn}> <i class="fa-solid fa-truck-arrow-right"></i> Manage Orders</Link></li>
                <li><Link to="/all-contact" onClick={handletoggleBtn}> <i class="fa-solid fa-truck-arrow-right"></i> Contact Query</Link></li>

                <button className='logout mb-5' onClick={logout}>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>

              </ul>
            </div>

          </header>
          : null
      }
    </>
  )
}

export default Header