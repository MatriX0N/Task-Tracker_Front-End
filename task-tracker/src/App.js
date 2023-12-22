import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Main from './Main'
import Auth from './Auth';
import Reg from './Reg';
import Katalog from './Katalog';
import Participants from './Participants';
import Boards from './Boards';
import Test from './Test'
function App() {
  return (
    <Router>
            <Routes>
                <Route path='/Welcome' element={<Main/>}/>
                <Route path='/Authorization' element={<Auth/>}/>
                <Route path='/Registration' element={<Reg/>}/>
                <Route path='/Katalog' element={<Katalog/>}/>
                <Route path='/Parcticipant' element={<Participants/>}/>
                <Route path='/Boards' element={<Boards/>}/>
                <Route path='/Test' element={<Test/>}/>
            </Routes>
        </Router>
  );
}

export default App;
