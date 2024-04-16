import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header class="header-menu fixed top-0 left-0 w-full py-8 xl:py-12 lg:py-8 xl:px-[15%] lg:px-[10%] px-[5%] bg-bg-color flex justify-between items-center z-50 sm-c:text-8xl">
    <a href="#Home" className="xl:text-[2.4rem] text-[2rem] font-bold text-text-color cursor-pointer">Muneeb <span className='text-main-color'>Rehman</span></a>

    <i class="bx bx-menu sm:block text-[3.1rem] text-white hidden" id="menu-icon" ></i>

    <nav class="navbar flex sm:hidden text-text-color text-[1.9rem] md:text-[1.4rem] transition duration-300 space-x-20 lg:space-x-12 md:space-x-8">
  <a href="#Home" className="active nav-link">Home</a>
  <a href="#works" className="nav-link">Projects</a>
  <a href="#Skills" className="nav-link">Skills</a>
  <a href="#About" className="nav-link">About</a>
  <a href="#Contact" className="nav-link">Contact</a>
</nav>

  </header>
  )
}

export default Navbar
