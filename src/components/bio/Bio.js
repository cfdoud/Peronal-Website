import React, { useRef, useEffect } from 'react';
import './bio.css';
import bitmoji from '../../assets/bitmoji.png';
import wave from '../../assets/wave.svg';

function Bio() {
  const textRef = useRef();
  let timeoutId = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = "Hi there! I'm Christian Doud";
    textElement.textContent = ""; // Clear the content before starting

    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        timeoutId.current = setTimeout(typeWriter, 100); // Adjust delay as needed
      }
    };

    typeWriter(); // Start the typewriter effect

    return () => {
      clearTimeout(timeoutId.current); // Clear the timeout on unmount
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <header className="App-header">
      <div className='hBox'>
        <div className='island'>
          <div className="message-Bubble">
            <h2>
              <img className="wave" src={wave} alt="wave" width="30" height="30" />
              <span ref={textRef} className="message-Text h4"></span> {/* Keep this span empty */}
            </h2>
          </div>
          <div className="title_Block">
            <h1>A software engineer. Aspiring full-stack developer passionate about crafting innovative solutions.</h1>
          </div>
        </div>
        <img src={bitmoji} className="bitmoji" alt="logo" width="30%" height="30%" />
      </div>

      <div className="bio">
        <p className='bio-text h5'>
          I am a software developer, and a graduate of UC Merced with a degree
          in Computer Science. With extensive experience in full-stack development,
          I have excelled in collaborating both in in-person and remote settings before
          ranging from web applications and mobile apps.
        </p>
      </div>
    </header>
  );
}

export default Bio;
