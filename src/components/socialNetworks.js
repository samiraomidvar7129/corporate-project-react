import React from 'react';
import "../index.css";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from 'react-router-dom';



const SocialNetworks= () => {
  return (

      <div className='socialNetworks'>
        <ul>
        <li><Link to='#' title='whatsapp'><FaWhatsapp className='social-icon'/> </Link></li>
        <li><Link to='https://www.linkedin.com/in/samira-omidvar-6038ab234' title='linkedin'>
        <GrLinkedinOption className='social-icon'/></Link></li>
        <li><Link to='#' title='twitter'><RiTwitterLine className='social-icon'/>  </Link></li>
        <li><Link to='#' title='facebook'><TiSocialFacebook className='social-icon'/> </Link></li>
      </ul>
      </div>
    
  )
}

export default SocialNetworks;

