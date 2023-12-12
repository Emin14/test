import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

// console.log({apiKey: apiKey})

axios.get(`http://localhost:3000/user/${apiKey}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
