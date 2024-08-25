import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
//import { textElement} from 'react';
import Navbar from './components/header/header';
import Bio from './components/bio/Bio';
import Toolbox from './components/toolbox-block/tool-box';
import Project from './components/Projects-box/projects';

function App() {



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
  
  
   <Project />  
  


  </div>
  );
}

export default App;
