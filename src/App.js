
import './App.css';
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
