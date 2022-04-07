import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faGear} className="fa-spin Icon"/>
        <p> Sito web in fase di sviluppo! </p>
        <img src="/logo.png" alt="Logo" className="Logo"/>
      </header>
    </div>
  );
}

export default App;
