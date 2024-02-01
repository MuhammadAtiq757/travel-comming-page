import React from 'react';
import intro from '../assets/videos/intro2.mp4'
import logo from '../assets/Images/travel.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CommingSoon = () => {
    return (
        <div className='tour text-center h-[700px] relative'>



  <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
    <source src={intro} type='video/mp4' />
    Your browser does not support the video tag.
  </video>

  <div className='mx-auto container relative '>
 <div className='flex justify-between px-4'>
 <img className='w-28' src={logo } alt="" />
 <button className=' btn outline-none mt-2 bg-blue-500 text-white border-none hover:bg-transparent'> <Link to='/contact'>Contact Us</Link> </button>
 </div>

   <div className='pt-[80px] px-4'>

<div className='flex text-white justify-center gap-8 text-4xl mb-8'>
<div>000
<br /> 
<p className='text-sm'>Days</p>
</div>

<div>00
<br /> 
<p className='text-sm'>hrs</p>
</div>
<div>00
<br /> 
<p className='text-sm'>Min</p>
</div>
<div>00
<br /> 
<p className='text-sm'>Sec</p>
</div>
</div>


   <p className='text-3xl font-semibold font-serif text-white'> BEFORE LAUNCHING OUR <br />
   <p className='text-2xl font-bold mt-1'>NEW WEBSITE</p>
   </p>

<p className='mt-6 text-white'>We're coming soon! Awesome template to present your future product or service. <br />
We're working hard to give you the best experience!</p>

<div className='mt-6 flex justify-center gap-8'>
  <button className='btn  bg-blue-500 text-white w-32 hover:bg-inherit'> NOTIFY ME</button>
  <button className='btn w-32  hover:bg-inherit'> MORE INFO</button>
</div>

<div className='flex justify-center mt-12 text-white text-2xl gap-4'>
<FaFacebook />  <FaInstagramSquare /> <FaWhatsappSquare /> <FaTwitter /><FaSkype />
</div>

   </div>
  </div>
</div>

    );
};

export default CommingSoon;