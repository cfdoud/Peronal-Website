import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
//import { textElement} from 'react';
import ZSE from './assets/ZSE.png';
import Navbar from './components/header/header';
import Bio from './components/bio/Bio';
import Toolbox from './components/toolbox-block/tool-box';
function App() {
  //const textRef = useRef(null);

  // const handleClick = () => {
  //   console.log('Button clicked');
    
  // };

  

  

  return (
    
    <div className="Background">
      <div className="App">
        
        <Navbar />

        <Bio />
      
        

  </div>


  <div className='p-5 parent-container'>
    <div className='title-container'>
      <h3 className='tool-text'>Tool Box</h3>
    </div>
  </div>

  <Toolbox />
  
  
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
