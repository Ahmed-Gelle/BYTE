
import './App.css';
import Home from './components/Home' 
import About from './components/About'
import Auth from './components/Auth'

import Nav from './components/Nav' 
import {Route , BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Auth}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
