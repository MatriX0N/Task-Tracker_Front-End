import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Main from './Main'
import Auth from './Auth';
import Reg from './Reg';
import Katalog from './Katalog';
function App() {
  return (
    <Router>
            <Routes>
                <Route path='/Welcome' element={<Main/>}/>
                <Route path='/Authorization' element={<Auth/>}/>
                <Route path='/Registration' element={<Reg/>}/>
                <Route path='/Katalog' element={<Katalog/>}/>
            </Routes>
        </Router>
  );
}

export default App;
