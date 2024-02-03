import React from 'react';
import intro from '../assets/videos/intro1.mp4';
import logo from '../assets/Images/travel.png';
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare, FaTwitter, FaSkype } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Counting from './Counting';
import Swal from 'sweetalert2';

const CommingSoon = () => {
  const handleAlert = () => {
    Swal.fire({
      position: 'top',
      width: '350px',
      icon: 'success',
      title: 'Notify Successful',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div
      className='tour text-center relative'
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        className='absolute top-0 left-0 object-cover w-[100%]'  
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={intro} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div
        className='gradient-background'
        style={{
          background: 'linear-gradient(to bottom, #2c3033bf, #2c3033bf)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></div>

      <div className='mx-auto relative'>
        <div
          className='flex justify-between px-4'
         
        >
          <img className='w-28' src={logo} alt='' />

          <button
            className='btn outline-none mt-2 bg-[#0ece91] hover:text-white hover:bg-transparent'
         
          >
            <Link to='/contact'>Contact Us</Link>
          </button>
        </div>

        <div
          className='pt-[15px] px-4'
       
        >
          <Counting />

          <p className='text-3xl font-semibold font-serif text-white'>
            BEFORE LAUNCHING OUR <br />
            <p className='text-2xl font-bold mt-1'>NEW WEBSITE</p>
          </p>

          <p className='mt-6 text-white'>
            We're coming soon! Awesome template to present your future product or service. <br />
            We're working hard to give you the best experience!
          </p>

          <div className='mt-10 flex justify-center gap-8'>
            <button
              onClick={handleAlert}
              className='btn bg-[#0ece91] hover:text-white w-32 hover:bg-inherit'
          
            >
              NOTIFY ME
            </button>

            <button
              className='btn w-32 hover:bg-inherit hover:text-white'
            
            >
              <Link to='/about'>About Us</Link>
            </button>
          </div>

          <div className='flex justify-center mt-12 text-white text-2xl gap-4'>
            <FaFacebook className='hover:text-[#0ece91]' />
            <FaInstagramSquare className='hover:text-[#0ece91]' />
            <FaWhatsappSquare className='hover:text-[#0ece91]' />
            <FaTwitter className='hover:text-[#0ece91]' />
            <FaSkype className='hover:text-[#0ece91]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
