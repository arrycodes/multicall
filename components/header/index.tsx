"use client"
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Header = () => {


  const {open}= useWeb3Modal()

  const handleClick = (e: Event) => {
  
    e.preventDefault()
    open()
    console.log("Opened")
  }

 
  return(
<header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="#" onClick={(e) => handleClick(e)}>Multicall App Sync<span>.</span></a></h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero" onClick={(e) => handleClick(e)}>Home</a></li>
          <li><a className="nav-link scrollto" href="#" onClick={(e) => handleClick(e)}>Staking</a></li>
          <li><a className="nav-link scrollto" href="#services" onClick={(e) => handleClick(e)}>Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio" onClick={(e) => handleClick(e)}>Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#migration" onClick={(e) => handleClick(e)}>Migration</a></li>
          <li><a className="nav-link scrollto" href="#deployment" onClick={(e) => handleClick(e)}>Deployment</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
  )
}

export default Header

