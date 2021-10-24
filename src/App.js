import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CountdownTimerList from './components/CountdownTimerList';
import Error from './components/Error';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          Countdown Chain
        </header>

        {/* Main content of the page. */}
        <body className="App-body">
          <Switch>
            {/* Use 'exact' here to only match: '/' */}
            <Route path="/" component={CountdownTimerList} exact />
            {/* Route everything else to the error component. */}
            <Route component={Error} /> 
          </Switch>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;