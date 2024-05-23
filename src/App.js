import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import wave from './assets/wave.svg';
import bitmoji from './assets/bitmoji.png';
import './App.css';
import { useEffect, useRef } from 'react';


function App() {
  const textRef = useRef(null);

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
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className = "Logo fs-1 fw-bold">CD</span>
            </a>
        </div>
        <div className="d-flex flex-row-reverse" type = "button">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className='bi bi-list'></i>
            

          </span>
          
        </button>


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
          
          <button className='btn btn-secondary'>
            <i className='bi bi-linkedin'></i>
            <a href='https://www.linkedin.com/in/cfdoud/'>LinkedIn</a>:
          </button>

      </header>
  </div> 
  </div>
  );
}

export default App;
