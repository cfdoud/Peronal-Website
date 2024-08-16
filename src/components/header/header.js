import React from 'react';
import './head.css';


function Navbar() {
  const handleClick = () => {
    // Define what should happen on click here
  };

  return (
    <nav className="navbar navbar-light bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="Logo fs-1 fw-bold">CD</span>
        </a>
        <button
          className='hamburger'
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="#offcanvasExample"
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
            <linearGradient id="BTq72ScaTZ1UBmT8omo2pa_44024_gr1" x1="32" x2="32" y1="5.333" y2="59.867" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stopColor="#1a6dff"></stop>
              <stop offset="1" stopColor="#c822ff"></stop>
            </linearGradient>
            <path fill="url(#BTq72ScaTZ1UBmT8omo2pa_44024_gr1)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
            <linearGradient id="BTq72ScaTZ1UBmT8omo2pb_44024_gr2" x1="32" x2="32" y1="5.333" y2="59.867" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stopColor="#1a6dff"></stop>
              <stop offset="1" stopColor="#c822ff"></stop>
            </linearGradient>
            <path fill="url(#BTq72ScaTZ1UBmT8omo2pb_44024_gr2)" d="M32,52c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S43.028,52,32,52z M32,14 c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z"></path>
            <linearGradient id="BTq72ScaTZ1UBmT8omo2pc_44024_gr3" x1="32" x2="32" y1="21.5" y2="26.336" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stopColor="#6dc7ff"></stop>
              <stop offset="1" stopColor="#e6abff"></stop>
            </linearGradient>
            <path fill="url(#BTq72ScaTZ1UBmT8omo2pc_44024_gr3)" d="M42,25c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V25z"></path>
            <linearGradient id="BTq72ScaTZ1UBmT8omo2pd_44024_gr4" x1="32" x2="32" y1="29.333" y2="34.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stopColor="#6dc7ff"></stop>
              <stop offset="1" stopColor="#e6abff"></stop>
            </linearGradient>
            <path fill="url(#BTq72ScaTZ1UBmT8omo2pd_44024_gr4)" d="M42,33c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V33z"></path>
            <linearGradient id="BTq72ScaTZ1UBmT8omo2pe_44024_gr5" x1="32" x2="32" y1="37" y2="41.337" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stopColor="#6dc7ff"></stop>
              <stop offset="1" stopColor="#e6abff"></stop>
            </linearGradient>
            <path fill="url(#BTq72ScaTZ1UBmT8omo2pe_44024_gr5)" d="M42,41c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V41z"></path>
          </svg>
        </button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className='bookshelf'>
            <div className='markers'>
              <div className='marker'>
                <a className="marker-text" aria-current="page" href="/">Home</a>
              </div>
            </div>
            <div className='markers'>
              <div className='marker'>
                <a className="marker-text" aria-current="page" href="https://www.linkedin.com/in/cfdoud/">LinkedIn</a>
              </div>
            </div>
            <div className='markers'>
              <div className='marker'>
                <a className="marker-text" aria-current="page" href="https://github.com/cfdoud">GitHub</a>
              </div>
            </div>
            <div className='markers'>
              <div className='marker'>
                <a className="marker-text" aria-current="page" href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer" download='./assets/resume.pdf'>Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
