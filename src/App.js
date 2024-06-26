import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import wave from './assets/wave.svg';
import bitmoji from './assets/bitmoji.png';
import './App.css';
import { useEffect, useRef } from 'react';
import ZSE from './assets/ZSE.png';

function App() {
  const textRef = useRef(null);

  const handleClick = () => {
    console.log('Button clicked');
    
  };

  useEffect(() => {
    const textElement = textRef.current; 
    const text = textElement.textContent;
    textElement.textContent = '';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    typeWriter();
  }, []);

  

  return (
    
    <div className="Background">
      <div className="App">
        <nav className="navbar navbar-light bg-black">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <span className="Logo fs-1 fw-bold">CD</span>
            </a>
            <button className='hamburger'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="#offcanvasExample" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
                <linearGradient id="BTq72ScaTZ1UBmT8omo2pa_44024_gr1" x1="32" x2="32" y1="5.333" y2="59.867" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#BTq72ScaTZ1UBmT8omo2pa_44024_gr1)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="BTq72ScaTZ1UBmT8omo2pb_44024_gr2" x1="32" x2="32" y1="5.333" y2="59.867" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#BTq72ScaTZ1UBmT8omo2pb_44024_gr2)" d="M32,52c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S43.028,52,32,52z M32,14 c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z"></path><linearGradient id="BTq72ScaTZ1UBmT8omo2pc_44024_gr3" x1="32" x2="32" y1="21.5" y2="26.336" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#BTq72ScaTZ1UBmT8omo2pc_44024_gr3)" d="M42,25c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V25z"></path><linearGradient id="BTq72ScaTZ1UBmT8omo2pd_44024_gr4" x1="32" x2="32" y1="29.333" y2="34.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#BTq72ScaTZ1UBmT8omo2pd_44024_gr4)" d="M42,33c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V33z"></path><linearGradient id="BTq72ScaTZ1UBmT8omo2pe_44024_gr5" x1="32" x2="32" y1="37" y2="41.337" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#BTq72ScaTZ1UBmT8omo2pe_44024_gr5)" d="M42,41c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V41z"></path>
              </svg>
            </button>
            
          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            
            
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
                    <a className="marker-text" aria-current="page" href="https://github.com/cfdoud">github</a>
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

        

      <header className="App-header">

        <div className='hBox'>
          <div className='island'>
            <div className = "message-Bubble">
              <h2>   
                  <img className ="wave" src={wave} alt="wave" width="30" height="30"/>
                  <span ref={textRef} className = "message-Text h4">Hi there! I'm Christian Doud</span>
              </h2>
            </div>
            <div className = "title_Block">
              <h1>A software engineer. Aspiring full-stack developer passionate about crafting innovative solutions.</h1>
            </div>
          </div>
          <img src={bitmoji} className="bitmoji" alt="logo" width = "30%" height = "30%" />
        </div>
          
          <div className = "bio">
            <p className='bio-text h5'>I am a software developer, 
            and a graduate of UC Merced with a degree 
            in Computer Science. With extensive experience in full-stack development,
            I have excelled in collaborating both in in-person and remote settings before
            ranging from web applications and mobile apps.</p>
          </div>

          
          {/* <button className='btn btn-secondary'>
            <i className='bi bi-linkedin'></i>
            <a href='https://www.linkedin.com/in/cfdoud/'>LinkedIn</a>:
          </button> */}

      </header>
  </div>


  <div className='p-5 parent-container'>
    <div className='title-container'>
      <h3 className='tool-text'>Tool Box</h3>
    </div>
  </div>


  <div className='card mx-auto'>
    <div className="tool-title">
      
        <div className = "tool-row justify-content-between">
          <div className='card card2 col-md-4 mb-5'>
            <p className='skill-text h5'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <circle cx="32" cy="33" r="6" fill="#ed7899"></circle><path fill="#8d6c9f" d="M32,40c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7S35.859,40,32,40z M32,28 c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S34.757,28,32,28z"></path><path fill="#8d6c9f" d="M32,46C15.178,46,2,40.29,2,33s13.178-13,30-13s30,5.71,30,13S48.822,46,32,46z M32,22 C16.822,22,4,27.037,4,33s12.822,11,28,11s28-5.037,28-11S47.178,22,32,22z"></path><path fill="#8d6c9f" d="M20.316,59.827c-1.222,0-2.335-0.28-3.316-0.847c-3.149-1.818-4.425-6.291-3.593-12.596 c0.793-6.004,3.397-13.065,7.334-19.885c3.938-6.819,8.752-12.606,13.555-16.295C39.341,6.332,43.853,5.202,47,7.02l0,0 c3.149,1.818,4.425,6.291,3.593,12.596C49.8,25.619,47.195,32.681,43.259,39.5c-3.938,6.819-8.752,12.606-13.555,16.295 C26.232,58.46,23.013,59.827,20.316,59.827z M43.684,8.179c-2.234,0-5.079,1.239-8.17,3.613c-4.6,3.532-9.23,9.11-13.04,15.708 c-3.809,6.598-6.324,13.396-7.084,19.146c-0.709,5.371,0.243,9.234,2.61,10.602s6.187,0.26,10.486-3.04 c4.6-3.532,9.23-9.11,13.04-15.708c3.809-6.598,6.324-13.396,7.084-19.146c0.709-5.371-0.243-9.234-2.61-10.602l0,0 C45.336,8.368,44.556,8.179,43.684,8.179z"></path><path fill="#8d6c9f" d="M43.684,59.827c-2.696,0-5.916-1.367-9.388-4.032c-4.803-3.688-9.617-9.476-13.555-16.295 c-3.937-6.819-6.541-13.881-7.334-19.885C12.575,13.311,13.851,8.838,17,7.02c3.15-1.816,7.661-0.686,12.704,3.186 c4.803,3.688,9.617,9.476,13.555,16.295c3.937,6.819,6.541,13.881,7.334,19.885C51.425,52.689,50.149,57.162,47,58.98 C46.019,59.547,44.904,59.827,43.684,59.827z M20.316,8.179c-0.873,0-1.651,0.189-2.316,0.573l0,0 c-2.367,1.367-3.319,5.23-2.61,10.602c0.76,5.75,3.275,12.549,7.084,19.146c3.81,6.598,8.44,12.176,13.04,15.708 c4.298,3.3,8.119,4.407,10.486,3.04s3.319-5.23,2.61-10.602c-0.76-5.75-3.275-12.549-7.084-19.146 c-3.81-6.598-8.44-12.176-13.04-15.708C25.396,9.419,22.551,8.179,20.316,8.179z"></path><path fill="#8d6c9f" d="M10.463,46.972c-0.044,0-0.088-0.003-0.133-0.009l-1.982-0.264 c-0.548-0.073-0.933-0.575-0.859-1.123c0.072-0.548,0.572-0.933,1.123-0.859l1.982,0.264c0.548,0.073,0.933,0.575,0.859,1.123 C11.387,46.606,10.957,46.972,10.463,46.972z"></path><path fill="#8d6c9f" d="M8.194,51.885c-0.536,0-0.98-0.426-0.998-0.967c-0.019-0.552,0.413-1.014,0.966-1.032 l1.998-0.067c0.551-0.037,1.015,0.413,1.033,0.966c0.019,0.552-0.413,1.014-0.966,1.032l-1.999,0.067 C8.218,51.885,8.206,51.885,8.194,51.885z"></path><path fill="#8d6c9f" d="M9.009,57.093c-0.429,0-0.825-0.277-0.956-0.708c-0.161-0.528,0.136-1.087,0.664-1.248 l1.913-0.584c0.53-0.166,1.088,0.136,1.248,0.664c0.162,0.528-0.136,1.087-0.664,1.248l-1.913,0.584 C9.203,57.079,9.105,57.093,9.009,57.093z"></path><path fill="#8d6c9f" d="M11.552,61.852c-0.281,0-0.561-0.118-0.759-0.349c-0.359-0.419-0.312-1.051,0.107-1.41 l1.518-1.303c0.418-0.358,1.049-0.312,1.41,0.107c0.359,0.419,0.312,1.051-0.107,1.41l-1.518,1.303 C12.015,61.772,11.783,61.852,11.552,61.852z"></path><path fill="#8d6c9f" d="M55.771,18.718c-0.02,0-0.039-0.001-0.059-0.002l-1.996-0.115 c-0.552-0.031-0.973-0.504-0.94-1.056c0.031-0.551,0.507-0.971,1.056-0.94l1.996,0.115c0.552,0.031,0.973,0.504,0.94,1.056 C56.737,18.307,56.296,18.718,55.771,18.718z"></path><path fill="#8d6c9f" d="M53.591,13.797c-0.487,0-0.913-0.355-0.988-0.852c-0.082-0.546,0.295-1.056,0.841-1.138 l1.978-0.297c0.548-0.072,1.056,0.296,1.138,0.841c0.082,0.546-0.295,1.056-0.841,1.138l-1.978,0.297 C53.69,13.793,53.64,13.797,53.591,13.797z"></path><path fill="#8d6c9f" d="M52.215,9.336c-0.36,0-0.708-0.194-0.887-0.536c-0.257-0.488-0.067-1.093,0.422-1.35l1.771-0.929 c0.488-0.256,1.093-0.068,1.35,0.422c0.257,0.488,0.067,1.093-0.422,1.35l-1.771,0.929C52.53,9.299,52.371,9.336,52.215,9.336z"></path><path fill="#8d6c9f" d="M49.266,5.919c-0.2,0-0.402-0.06-0.578-0.185c-0.45-0.32-0.556-0.944-0.236-1.395l1.158-1.631 c0.32-0.45,0.943-0.557,1.395-0.236c0.45,0.32,0.556,0.944,0.236,1.395l-1.158,1.631C49.887,5.772,49.579,5.919,49.266,5.919z"></path>
                </svg>
              </span>
              React
            </p>
          </div>


          <div className='card card2 mb-5'>
            <p className='skill-text h5'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="BVfSkcHaucNDvMxtSzwJza_uLDrtp8o8zTG_gr1" x1="27" x2="27" y1="11.043" y2="14.639" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="27" cy="13" r="2" fill="url(#BVfSkcHaucNDvMxtSzwJza_uLDrtp8o8zTG_gr1)"></circle><linearGradient id="BVfSkcHaucNDvMxtSzwJzb_uLDrtp8o8zTG_gr2" x1="37" x2="37" y1="49.128" y2="52.83" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="37" cy="51" r="2" fill="url(#BVfSkcHaucNDvMxtSzwJzb_uLDrtp8o8zTG_gr2)"></circle><linearGradient id="BVfSkcHaucNDvMxtSzwJzc_uLDrtp8o8zTG_gr3" x1="32" x2="32" y1="6.66" y2="56.873" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#BVfSkcHaucNDvMxtSzwJzc_uLDrtp8o8zTG_gr3)" d="M51,21h-7v-8c0-3.859-3.14-7-7-7H27c-3.86,0-7,3.141-7,7v8h-7c-3.86,0-7,3.141-7,7v8	c0,3.859,3.14,7,7,7h7v8c0,3.859,3.14,7,7,7h10c3.86,0,7-3.141,7-7v-8h7c3.86,0,7-3.141,7-7v-8C58,24.141,54.86,21,51,21z M13,41	c-2.757,0-5-2.243-5-5v-5h7v-2H8v-1c0-0.342,0.035-0.677,0.101-1H23v-2H9.026c0.914-1.207,2.348-2,3.974-2h16v-2h-7v-8	c0-2.757,2.243-5,5-5h10c2.757,0,5,2.243,5,5v15c0,1.654-1.346,3-3,3h-5.489h-3.021H25c-2.757,0-5,2.243-5,5v5H13z M51,41H35v2h7v8	c0,2.757-2.243,5-5,5H27c-2.757,0-5-2.243-5-5V36c0-1.654,1.346-3,3-3h5.489h3.021H39c2.757,0,5-2.243,5-5v-5h7c2.757,0,5,2.243,5,5	v5h-7v2h7v1c0,0.342-0.035,0.677-0.101,1H41v2h13.974C54.061,40.207,52.627,41,51,41z"></path>
                </svg>
              </span>
              python
            </p>
          </div>


          <div className='card card2 mb-5'>
            <p className='skill-text h5'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="GdeByWRAcrxkNrB1xXKVla_ZMc42tPbG32H_gr1" x1="32" x2="32" y1="57" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c822ff"></stop><stop offset="1" stop-color="#1a6dff"></stop></linearGradient><path fill="none" stroke="url(#GdeByWRAcrxkNrB1xXKVla)" stroke-miterlimit="10" stroke-width="2" d="M62,30.45v3.1	c-2.77,0.31-4.93,2.4-5.95,5.67c-1.02,3.31-1.16,7.37-1.05,10.51c0.11,3.26-2.43,6.27-5.87,6.27H14.87c-3.44,0-5.98-3.01-5.87-6.27	c0.11-3.14-0.03-7.2-1.05-10.51C6.93,35.95,4.77,33.86,2,33.55v-3.1c2.77-0.31,4.93-2.4,5.95-5.67C8.97,21.47,9.11,17.41,9,14.27	C8.89,11.01,11.43,8,14.87,8h34.26c3.44,0,5.98,3.01,5.87,6.27c-0.11,3.14,0.03,7.2,1.05,10.51C57.07,28.05,59.23,30.14,62,30.45z"></path><linearGradient id="GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2" x1="32" x2="32" y1="53" y2="11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6abff"></stop><stop offset="1" stop-color="#6dc7ff"></stop></linearGradient><path fill="url(#GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2)" d="M14.87,53c-0.95,0-1.599-0.465-1.976-0.854c-0.599-0.619-0.925-1.462-0.896-2.314	c0.11-3.134-0.005-7.677-1.181-11.495C9.942,35.533,8.351,33.342,6.303,32c2.048-1.341,3.639-3.529,4.511-6.326	c1.18-3.829,1.295-8.372,1.185-11.51c-0.028-0.848,0.298-1.691,0.896-2.31C13.271,11.465,13.92,11,14.87,11h34.26	c0.95,0,1.599,0.465,1.976,0.854c0.599,0.619,0.925,1.462,0.896,2.314c-0.11,3.134,0.005,7.677,1.181,11.495	c0.875,2.804,2.467,4.995,4.515,6.337c-2.048,1.341-3.639,3.529-4.511,6.326c-1.18,3.829-1.295,8.372-1.185,11.51	c0.028,0.848-0.298,1.691-0.896,2.31C50.729,52.535,50.08,53,49.13,53H14.87z M36.713,31.135c2.657-0.428,4.744-2.891,4.744-5.65	c0-3.93-3.105-6.485-7.829-6.485H23l0,25.99h10.689c5.66,0,9.07-2.769,9.07-7.35c0-3.461-2.433-5.955-6.047-6.352V31.135z M32.631,22.298c2.993,0,4.693,1.334,4.693,3.746c0,2.576-1.975,4.011-5.558,4.011H27v-7.757H32.631z M27,41.692V33.14h5.6	c3.909,0,5.935,1.435,5.935,4.245c0,2.81-1.975,4.306-5.701,4.306H27z"></path>
                </svg>
              </span>
              Bootstrap
            </p>
          </div>

          <div className='card card2 mb-5'>
            <p className='skill-text h4'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="SVGID_1__V6HShIzw21x7_gr1" x1="32" x2="32" y1="9.043" y2="55.011" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__V6HShIzw21x7_gr1)" d="M51,8H13c-2.8,0-5,2.2-5,5v38c0,2.8,2.2,5,5,5h38c2.8,0,5-2.2,5-5V13C56,10.2,53.8,8,51,8z M54,51	c0,1.7-1.3,3-3,3H13c-1.7,0-3-1.3-3-3V13c0-1.7,1.3-3,3-3h38c1.7,0,3,1.3,3,3V51z"></path><linearGradient id="SVGID_2__V6HShIzw21x7_gr2" x1="45.578" x2="45.578" y1="35.681" y2="50.191" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#SVGID_2__V6HShIzw21x7_gr2)" d="M46.7,41.5l-0.8-0.3c-1.4-0.6-2-1-2-2c0-0.8,0.6-1.4,1.5-1.4c0.8,0,1.3,0.3,1.8,1c0.1,0.2,0.4,0.3,0.7,0.1 l1.7-1.1c0.2-0.1,0.3-0.5,0.2-0.7c-1-1.5-2.4-2.1-4.3-2.1c-2.9,0-4.7,1.8-4.7,4.2c0,2.6,1.5,3.9,3.9,4.8l0.8,0.3 c1.5,0.6,2.2,1,2.2,2.1c0,0.9-0.7,1.6-2,1.6c-1.4,0-2.1-0.8-2.8-1.8c-0.2-0.2-0.5-0.3-0.7-0.1l-1.7,1.1c-0.2,0.1-0.3,0.4-0.2,0.7 c1,1.7,2.6,3,5.4,3c3.1,0,5.3-1.6,5.3-4.5C51,43.8,49.5,42.6,46.7,41.5z"></path><linearGradient id="SVGID_3__V6HShIzw21x7_gr3" x1="34.081" x2="34.081" y1="35.681" y2="50.191" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#SVGID_3__V6HShIzw21x7_gr3)" d="M38.5,35h-2.3c-0.3,0-0.5,0.2-0.5,0.5v10.1c0,1.6-0.6,2-1.7,2c-0.9,0-1.6-0.5-2.1-1.2 c-0.1-0.2-0.4-0.3-0.7-0.1l-1.8,1.1c-0.2,0.1-0.3,0.5-0.2,0.7c0.9,1.5,2.6,2.9,5,2.9c2.9,0,4.8-1.5,4.8-4.9V35.5 C39,35.2,38.8,35,38.5,35z"></path>
                </svg>
              </span>
              JavaScript
            </p>
          </div>

          <div className='card2 card mb-5 '>
            <p className='skill-text h5'>
              <span className=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="SVGID_1__V6HShIzw21x7_gr1" x1="32" x2="32" y1="9.043" y2="55.011" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__V6HShIzw21x7_gr1)" d="M51,8H13c-2.8,0-5,2.2-5,5v38c0,2.8,2.2,5,5,5h38c2.8,0,5-2.2,5-5V13C56,10.2,53.8,8,51,8z M54,51	c0,1.7-1.3,3-3,3H13c-1.7,0-3-1.3-3-3V13c0-1.7,1.3-3,3-3h38c1.7,0,3,1.3,3,3V51z"></path><linearGradient id="SVGID_2__V6HShIzw21x7_gr2" x1="45.578" x2="45.578" y1="35.681" y2="50.191" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#SVGID_2__V6HShIzw21x7_gr2)" d="M46.7,41.5l-0.8-0.3c-1.4-0.6-2-1-2-2c0-0.8,0.6-1.4,1.5-1.4c0.8,0,1.3,0.3,1.8,1c0.1,0.2,0.4,0.3,0.7,0.1 l1.7-1.1c0.2-0.1,0.3-0.5,0.2-0.7c-1-1.5-2.4-2.1-4.3-2.1c-2.9,0-4.7,1.8-4.7,4.2c0,2.6,1.5,3.9,3.9,4.8l0.8,0.3 c1.5,0.6,2.2,1,2.2,2.1c0,0.9-0.7,1.6-2,1.6c-1.4,0-2.1-0.8-2.8-1.8c-0.2-0.2-0.5-0.3-0.7-0.1l-1.7,1.1c-0.2,0.1-0.3,0.4-0.2,0.7 c1,1.7,2.6,3,5.4,3c3.1,0,5.3-1.6,5.3-4.5C51,43.8,49.5,42.6,46.7,41.5z"></path><linearGradient id="SVGID_3__V6HShIzw21x7_gr3" x1="34.081" x2="34.081" y1="35.681" y2="50.191" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#SVGID_3__V6HShIzw21x7_gr3)" d="M38.5,35h-2.3c-0.3,0-0.5,0.2-0.5,0.5v10.1c0,1.6-0.6,2-1.7,2c-0.9,0-1.6-0.5-2.1-1.2 c-0.1-0.2-0.4-0.3-0.7-0.1l-1.8,1.1c-0.2,0.1-0.3,0.5-0.2,0.7c0.9,1.5,2.6,2.9,5,2.9c2.9,0,4.8-1.5,4.8-4.9V35.5 C39,35.2,38.8,35,38.5,35z"></path>
                </svg>
              </span>
              MySQL
            </p>
          </div>

        </div>
        
        <div className = "tool-row justify-content-between">
        <div className='card card2 col-md-4 mb-5'>
            <p className='skill-text h5'>
              <span className='m-3'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                <linearGradient id="kY2lFHytK6J7eR89ploKLa_2T6TKY6whzgV_gr1" x1="32.485" x2="32.485" y1="26.009" y2="39.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLa_2T6TKY6whzgV_gr1)" d="M26.07,35.31l6.17-3.6l6.66,3.92c-1.3,2.29-3.69,3.7-6.33,3.7 C29.73,39.33,27.26,37.69,26.07,35.31z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLb_2T6TKY6whzgV_gr2" x1="32" x2="32" y1="27.121" y2="56.372" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLb_2T6TKY6whzgV_gr2)" d="M52.6,43.67v0.22L32,55.79l-20.6-11.9 l7.7-4.5c2.6,4.77,7.67,8.01,13.47,8.01c5.52,0,10.55-2.93,13.29-7.69L52.6,43.67z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLc_2T6TKY6whzgV_gr3" x1="31.93" x2="31.93" y1="24.81" y2="35.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLc_2T6TKY6whzgV_gr3)" d="M38.55,27.97l-6.35,3.72h-0.01l-6.13,3.6 c-0.48-0.97-0.75-2.06-0.75-3.22c0-1.39,0.39-2.68,1.07-3.79c1.28-2.08,3.57-3.47,6.19-3.47C34.98,24.81,37.2,25.98,38.55,27.97z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLd_2T6TKY6whzgV_gr4" x1="31.87" x2="31.87" y1="8.21" y2="43.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLd_2T6TKY6whzgV_gr4)" d="M45.12,24.1l0.39-0.24 c-2.83-4.45-7.67-7.12-12.94-7.12c-5.58,0-10.47,3-13.15,7.46c-1.38,2.31-2.18,4.99-2.18,7.87c0,2.65,0.67,5.13,1.85,7.3 l-7.69,4.52V20.11L32,8.21l20.34,11.75L45.12,24.1z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLe_2T6TKY6whzgV_gr5" x1="15.25" x2="15.25" y1="32.704" y2="48.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLe_2T6TKY6whzgV_gr5)" d="M19.09,39.37c0,0.01,0.01,0.01,0.01,0.02 l-7.7,4.5L19.09,39.37z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLf_2T6TKY6whzgV_gr6" x1="29.15" x2="29.15" y1="26.351" y2="39.094" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLf_2T6TKY6whzgV_gr6)" d="M32.24,31.71l-6.17,3.6 c0-0.01-0.01-0.01-0.01-0.02l6.13-3.6h0.01L32.24,31.71z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLg_2T6TKY6whzgV_gr7" x1="15.25" x2="15.25" y1="30.671" y2="43.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLg_2T6TKY6whzgV_gr7)" d="M19.09,39.37c0,0.01,0.01,0.01,0.01,0.02 l-7.7,4.5L19.09,39.37z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLh_2T6TKY6whzgV_gr8" x1="29.15" x2="29.15" y1="24.723" y2="35.31" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLh_2T6TKY6whzgV_gr8)" d="M32.24,31.71l-6.17,3.6 c0-0.01-0.01-0.01-0.01-0.02l6.13-3.6h0.01L32.24,31.71z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLi_2T6TKY6whzgV_gr9" x1="42.27" x2="42.27" y1="13.698" y2="56.641" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#kY2lFHytK6J7eR89ploKLi_2T6TKY6whzgV_gr9)" points="52.34,19.96 32.24,31.71 32.2,31.69 38.55,27.97 45.12,24.1"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLj_2T6TKY6whzgV_gr10" x1="42.27" x2="42.27" y1="8.21" y2="43.887" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#kY2lFHytK6J7eR89ploKLj_2T6TKY6whzgV_gr10)" points="52.34,19.96 32.24,31.71 32.2,31.69 38.55,27.97 45.12,24.1"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLk_2T6TKY6whzgV_gr11" x1="32" x2="32" y1="1.255" y2="56.081" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLk_2T6TKY6whzgV_gr11)" d="M55.1,16.93L33.5,4.46 c-0.93-0.53-2.07-0.53-3,0L8.9,16.93c-0.92,0.54-1.5,1.53-1.5,2.6v24.94c0,1.07,0.58,2.06,1.5,2.6l21.6,12.47 c0.93,0.53,2.07,0.53,3,0l21.6-12.47c0.92-0.54,1.5-1.53,1.5-2.6V19.53C56.6,18.46,56.02,17.47,55.1,16.93z M54.6,44.47 c0,0.36-0.19,0.69-0.5,0.87L32.5,57.81c-0.31,0.17-0.69,0.17-1,0L9.9,45.34c-0.31-0.18-0.5-0.51-0.5-0.87V19.53 c0-0.36,0.19-0.69,0.5-0.87L31.5,6.19c0.31-0.17,0.69-0.17,1,0l21.6,12.47c0.31,0.18,0.5,0.51,0.5,0.87V44.47z"></path><polygon fill="#fff" points="45.86,39.7 45.86,39.71 38.9,35.63"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLl_2T6TKY6whzgV_gr12" x1="42.42" x2="42.42" y1="21" y2="48.745" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLl_2T6TKY6whzgV_gr12)" d="M52.34,19.96l-20.1,11.75l6.66,3.92 l6.96,4.08l6.74,3.96V20.11L52.34,19.96z M44,33h-2v2h-2v-2h-2v-2h2v-2h2v2h2V33z M51,33h-2v2h-2v-2h-2v-2h2v-2h2v2h2V33z"></path>
              </svg>
              </span>
              c/c++ 
            </p>
          </div>


          <div className='card card2 mb-5'>
            <p className='skill-text h5'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="BVfSkcHaucNDvMxtSzwJza_uLDrtp8o8zTG_gr1" x1="27" x2="27" y1="11.043" y2="14.639" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="27" cy="13" r="2" fill="url(#BVfSkcHaucNDvMxtSzwJza_uLDrtp8o8zTG_gr1)"></circle><linearGradient id="BVfSkcHaucNDvMxtSzwJzb_uLDrtp8o8zTG_gr2" x1="37" x2="37" y1="49.128" y2="52.83" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="37" cy="51" r="2" fill="url(#BVfSkcHaucNDvMxtSzwJzb_uLDrtp8o8zTG_gr2)"></circle><linearGradient id="BVfSkcHaucNDvMxtSzwJzc_uLDrtp8o8zTG_gr3" x1="32" x2="32" y1="6.66" y2="56.873" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#BVfSkcHaucNDvMxtSzwJzc_uLDrtp8o8zTG_gr3)" d="M51,21h-7v-8c0-3.859-3.14-7-7-7H27c-3.86,0-7,3.141-7,7v8h-7c-3.86,0-7,3.141-7,7v8	c0,3.859,3.14,7,7,7h7v8c0,3.859,3.14,7,7,7h10c3.86,0,7-3.141,7-7v-8h7c3.86,0,7-3.141,7-7v-8C58,24.141,54.86,21,51,21z M13,41	c-2.757,0-5-2.243-5-5v-5h7v-2H8v-1c0-0.342,0.035-0.677,0.101-1H23v-2H9.026c0.914-1.207,2.348-2,3.974-2h16v-2h-7v-8	c0-2.757,2.243-5,5-5h10c2.757,0,5,2.243,5,5v15c0,1.654-1.346,3-3,3h-5.489h-3.021H25c-2.757,0-5,2.243-5,5v5H13z M51,41H35v2h7v8	c0,2.757-2.243,5-5,5H27c-2.757,0-5-2.243-5-5V36c0-1.654,1.346-3,3-3h5.489h3.021H39c2.757,0,5-2.243,5-5v-5h7c2.757,0,5,2.243,5,5	v5h-7v2h7v1c0,0.342-0.035,0.677-0.101,1H41v2h13.974C54.061,40.207,52.627,41,51,41z"></path>
                </svg>
              </span>
              python
            </p>
          </div>


          <div className='card card2 mb-5'>
            <p className='skill-text h5'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="GdeByWRAcrxkNrB1xXKVla_ZMc42tPbG32H_gr1" x1="32" x2="32" y1="57" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c822ff"></stop><stop offset="1" stop-color="#1a6dff"></stop></linearGradient><path fill="none" stroke="url(#GdeByWRAcrxkNrB1xXKVla)" stroke-miterlimit="10" stroke-width="2" d="M62,30.45v3.1	c-2.77,0.31-4.93,2.4-5.95,5.67c-1.02,3.31-1.16,7.37-1.05,10.51c0.11,3.26-2.43,6.27-5.87,6.27H14.87c-3.44,0-5.98-3.01-5.87-6.27	c0.11-3.14-0.03-7.2-1.05-10.51C6.93,35.95,4.77,33.86,2,33.55v-3.1c2.77-0.31,4.93-2.4,5.95-5.67C8.97,21.47,9.11,17.41,9,14.27	C8.89,11.01,11.43,8,14.87,8h34.26c3.44,0,5.98,3.01,5.87,6.27c-0.11,3.14,0.03,7.2,1.05,10.51C57.07,28.05,59.23,30.14,62,30.45z"></path><linearGradient id="GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2" x1="32" x2="32" y1="53" y2="11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6abff"></stop><stop offset="1" stop-color="#6dc7ff"></stop></linearGradient><path fill="url(#GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2)" d="M14.87,53c-0.95,0-1.599-0.465-1.976-0.854c-0.599-0.619-0.925-1.462-0.896-2.314	c0.11-3.134-0.005-7.677-1.181-11.495C9.942,35.533,8.351,33.342,6.303,32c2.048-1.341,3.639-3.529,4.511-6.326	c1.18-3.829,1.295-8.372,1.185-11.51c-0.028-0.848,0.298-1.691,0.896-2.31C13.271,11.465,13.92,11,14.87,11h34.26	c0.95,0,1.599,0.465,1.976,0.854c0.599,0.619,0.925,1.462,0.896,2.314c-0.11,3.134,0.005,7.677,1.181,11.495	c0.875,2.804,2.467,4.995,4.515,6.337c-2.048,1.341-3.639,3.529-4.511,6.326c-1.18,3.829-1.295,8.372-1.185,11.51	c0.028,0.848-0.298,1.691-0.896,2.31C50.729,52.535,50.08,53,49.13,53H14.87z M36.713,31.135c2.657-0.428,4.744-2.891,4.744-5.65	c0-3.93-3.105-6.485-7.829-6.485H23l0,25.99h10.689c5.66,0,9.07-2.769,9.07-7.35c0-3.461-2.433-5.955-6.047-6.352V31.135z M32.631,22.298c2.993,0,4.693,1.334,4.693,3.746c0,2.576-1.975,4.011-5.558,4.011H27v-7.757H32.631z M27,41.692V33.14h5.6	c3.909,0,5.935,1.435,5.935,4.245c0,2.81-1.975,4.306-5.701,4.306H27z"></path>
                </svg>
              </span>
              Bootstrap
            </p>
          </div>


          <div className='card card2 mb-5'>
            <p className='skill-text  h5'>
              <span className='m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="3I2Noo7pWEtTNrptMJT8ia_8EbY3Bnfw0aL_gr1" x1="41.5" x2="41.5" y1="24.092" y2="41.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#3I2Noo7pWEtTNrptMJT8ia_8EbY3Bnfw0aL_gr1)" d="M41.5,24.092c-4.687,0-8.5,3.813-8.5,8.5s3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5 S46.187,24.092,41.5,24.092z M41.5,39.092c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5 S45.084,39.092,41.5,39.092z"></path><linearGradient id="3I2Noo7pWEtTNrptMJT8ib_8EbY3Bnfw0aL_gr2" x1="31.5" x2="31.5" y1="5.092" y2="59.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#3I2Noo7pWEtTNrptMJT8ib_8EbY3Bnfw0aL_gr2)" d="M40.56,24.092c5.206,0,9.44-4.249,9.44-9.471c0-5.255-4.235-9.529-9.44-9.529h-7.675h-1.77 H22.44c-5.206,0-9.44,4.248-9.44,9.47c0,3.74,2.151,6.975,5.265,8.534C15.149,24.651,13,27.857,13,31.562 c0,3.769,2.197,7.025,5.368,8.57C15.163,41.753,13,45.122,13,49.116c0,5.501,4.476,9.977,9.977,9.977 C28.503,59.092,33,54.595,33,49.068v-7.976v-2v-6.5v-8.5H40.56z M15,14.562c0-4.119,3.338-7.47,7.44-7.47H31v15h-8.505H22.44 C18.338,22.092,15,18.714,15,14.562z M31,49.068c0,4.425-3.599,8.024-8.023,8.024c-4.398,0-7.977-3.578-7.977-7.977 c0-4.499,3.395-8.023,7.729-8.023H31V49.068z M31,39.092h-8.271h-0.234c-4.132,0-7.495-3.378-7.495-7.53 c0-4.119,3.362-7.47,7.495-7.47H31V39.092z M33,22.092v-15h7.56c4.103,0,7.44,3.378,7.44,7.529c0,4.119-3.338,7.471-7.44,7.471H33 z"></path><linearGradient id="3I2Noo7pWEtTNrptMJT8ic_8EbY3Bnfw0aL_gr3" x1="42.159" x2="42.159" y1="29.41" y2="37.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#3I2Noo7pWEtTNrptMJT8ic_8EbY3Bnfw0aL_gr3)" d="M44.682,29.41l-6.364,6.364c1.757,1.757,4.607,1.757,6.364,0 C46.439,34.017,46.439,31.168,44.682,29.41z"></path><linearGradient id="3I2Noo7pWEtTNrptMJT8id_8EbY3Bnfw0aL_gr4" x1="23" x2="23" y1="49.123" y2="55.046" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#3I2Noo7pWEtTNrptMJT8id_8EbY3Bnfw0aL_gr4)" d="M17,49.154c0,3.254,2.679,5.892,5.984,5.892c3.305,0,6.016-2.669,6.016-5.923L17,49.154z"></path><linearGradient id="3I2Noo7pWEtTNrptMJT8ie_8EbY3Bnfw0aL_gr5" x1="23.029" x2="23.029" y1="9.092" y2="14.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#3I2Noo7pWEtTNrptMJT8ie_8EbY3Bnfw0aL_gr5)" d="M22.5,9.092c-2.869,0-5.225,2.197-5.478,5l12.013,0v-5H22.5z"></path>
                </svg>
              </span>
              Figma
            </p>
          </div>

          <div className='card2 card mb-5 '>
            
              <span className=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                  <linearGradient id="SVGID_1__xBKl2pdJg5kk_gr1" x1="32" x2="32" y1="5.34" y2="56.998" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__xBKl2pdJg5kk_gr1)" d="M57.9,28.5L35.5,6.1c-0.9-0.9-2.2-1.5-3.5-1.5s-2.6,0.5-3.5,1.5L6.1,28.5c-0.9,0.9-1.5,2.2-1.5,3.5	s0.5,2.6,1.5,3.5l22.3,22.3c0.9,0.9,2.2,1.5,3.5,1.5s2.6-0.5,3.5-1.5l22.3-22.3c0.9-0.9,1.5-2.2,1.5-3.5S58.8,29.4,57.9,28.5z M56.5,34.1L34.1,56.5c-1.1,1.1-3.1,1.1-4.2,0L7.5,34.1C7,33.6,6.7,32.8,6.7,32s0.3-1.6,0.9-2.1l16-16l6.5,6.5h0V43h2V22.4	l10.8,10.8l1.4-1.4L24.9,12.5l5-5C30.4,7,31.2,6.7,32,6.7s1.6,0.3,2.1,0.9l22.3,22.3c0.6,0.6,0.9,1.3,0.9,2.1S57,33.6,56.5,34.1z"></path><linearGradient id="SVGID_2__xBKl2pdJg5kk_gr2" x1="31" x2="31" y1="39" y2="47.213" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="31" cy="43" r="4" fill="url(#SVGID_2__xBKl2pdJg5kk_gr2)"></circle><linearGradient id="SVGID_3__xBKl2pdJg5kk_gr3" x1="31" x2="31" y1="17.043" y2="24.326" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="31" cy="21" r="4" fill="url(#SVGID_3__xBKl2pdJg5kk_gr3)"></circle><g><linearGradient id="SVGID_4__xBKl2pdJg5kk_gr4" x1="43" x2="43" y1="28.021" y2="35.733" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="43" cy="32" r="4" fill="url(#SVGID_4__xBKl2pdJg5kk_gr4)"></circle></g>
                </svg>
              </span>
              <p className='skill-text  h5'>
              git
            </p>
          </div>
        </div>
    </div>
  </div>
  
  {/* Projects Section */}
  <div className='p-5 parent-container'>
    <div className='title-container'>
      <h3 className='tool-text'>Recent Projects</h3>
    </div>
  </div>

  <div className='project-container'>
    <div className='project-card'>
      <div className='project-image'>
        <div className='project-text'>
          <a href='https://github.com/cfdoud/Zombie-Shooter-Extreme' style={{textDecoration: 'none', color: 'green'}}>Zombie Shooter Extreme!</a>
          <p>Zombie style shooter game created with Raylib library.</p>
        </div>
        <a href='https://github.com/cfdoud/Zombie-Shooter-Extreme'>
          <img src={ZSE} className='project-image' alt=' goes here' />
        </a>
      </div>
    </div>


    <div className='project-card'>
      <div className='project-image'>
        <div className='project-text'>
          <a href='https://github.com/cfdoud/Finsta-gram' style={{textDecoration: 'none', color: 'green'}}>Finstagram</a>
            <p>Instagram-type site where users can dynamically share and view their best moments.</p>
        </div>
        <a href='https://github.com/cfdoud/Finsta-gram'>
          <img src={ZSE} className='project-image' alt=' goes here' />
        </a>      
      </div>
    </div>
  
  </div>        
  


  </div>
  );
}

export default App;
