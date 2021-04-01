
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Components/Sidebar/index';
import Home from './Pages/index'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
