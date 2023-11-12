import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

function Footer() {
  return (
    <div className='bg-success p-5 text-white'>
      <div className='container'>
        <div className='row'>
          {/* first column */}

        <div className='col-md-3'> 
        <p>Contact</p>
        <small>No 86 olowora Berger, off ojodu Lagos state</small>

        
        </div>
        {/* second column */}

        <div className='col-md-3'>
          <p>Menu</p>
          <Link className='nav-link'>Home</Link>
          <Link className='nav-link'>Shop</Link>
          <Link className='nav-link'>Payment</Link>

        </div>
        {/* third column */}

        <div className='col-md-3'> 
        <p>Company</p>
          <Link className='nav-link '>Menu</Link>
          <Link className='nav-link '>Terms & condition</Link>
          <Link className='nav-link '>Payment</Link>

        </div>
        {/* fourth column */}

        <div className='col-md-3'> 
        <p>Link</p>
          <Link className='nav-link '><BsFacebook/> Facebook</Link>
          <Link className='nav-link '> <BsTwitter/>X</Link>
          <Link className='nav-link '><BsInstagram/> Instagram</Link>

        </div>
 



        </div>
               
      </div>


    </div>
  )
}

export default Footer