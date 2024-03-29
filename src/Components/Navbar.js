import React from 'react'
import {Link} from "react-scroll"

export default function NavBar() {
  return (
    <div>
        <ul className='navbar'>
            <li>
            01. &nbsp;<Link to="about_me" className="navbar_link" smooth={true} href="#">About</Link>
            </li>
            {/* <li>
            02. &nbsp;<Link to="" smooth={true} href="#">Experience</Link>
            </li> */}
            <li>
            02. &nbsp;<Link to="projects" className="navbar_link" smooth={true} href="#">Projects</Link> 

            </li>
            <li>
            03. &nbsp;<Link to="contact_me" className="navbar_link" smooth={true} href="#">Contact</Link> 
            </li>
        </ul>
        
    </div>
  )
}
