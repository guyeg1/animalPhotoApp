import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer ">
      <a className='w-10 h-10 md:w-8 md:h-8 p-1' href="#"><Image width={30} height={30} src="/assets/home.png" alt="Home" /></a>
      <a className='w-10 h-10 md:w-8 md:h-8 p-1' href="#"><Image width={30} height={30} src="/assets/search.png" alt="Search" /></a>
      <a className='w-10 h-10 md:w-8 md:h-8 p-1' href="/"><Image width={30} height={30} src="/assets/heart.png" alt="Favourite" /></a>
      <a className='w-10 h-10 md:w-8 md:h-8 p-1' href="/"><Image width={30} height={30} src="/assets/profile.png" className='' alt="Profile" /></a>

      <style jsx>{`
        .footer {
          background-color: #ffffff;
          padding: 10px;
          text-align: center;
          width: 100%;
          display: flex;
          justify-content: space-around;
          position: fixed;
          left:0;
          bottom:0;
          z-index: 50;
          border-top: 2px solid #F5F5F5;
          border-radius-bottom: 50%;

        }

        .footer a {
          display: inline-block;
          margin: 0 10px;
          color: #000000;
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
};
export default Footer;