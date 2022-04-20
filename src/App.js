
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Fablab from './Components/Fablab';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
    <Router>
    
    <Routes>
      
    <Route exact path='/' element={<Fablab/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/signup' element={<Signup/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
