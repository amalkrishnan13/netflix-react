import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'

function Navbar() {
    const [show,handleShow]=useState(false)

    useEffect(()=>{
        // to check events happen or not
        window.addEventListener('scroll',()=>{
            if(window.scrollY>250){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })

    },[])
    // console.log(show);


  return (
    <div className={`nav ${show && 'nav_black'}`}>
<img className='logo' src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'></img>   
 </div>
  )
}

export default Navbar
