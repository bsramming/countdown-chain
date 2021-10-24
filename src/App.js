import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

import CountdownTimerList from './components/CountdownTimerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Countdown Chain
      </header>
      <body className="App-body">
        <CountdownTimerList />
      </body>
    </div>
  );
}

export default App;
