import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1 className='display-3'>Christian Doud</h1>
          <h2 className='lead'>Software Developer</h2>
          <p>Merced, CA</p>
          <button className='btn btn-secondary'>
            <i className='bi bi-linkedin'></i>
            <a href='https://www.linkedin.com/in/cfdoud/'>LinkedIn</a>:
          </button>
        </div>
      </header>
      <div className=''>
        <div className=''>
          <div className='col-12 col-md-6'>
            <h3>Education</h3>
            <p>Univeristy of California Merced</p>
            <p>Merced, CA</p>
            <p>2019-2024</p>
            <p>Bachelor of Science in Computer Science</p>
          </div>
        </div>
    </div>
  </div> 
  );
}

export default App;
