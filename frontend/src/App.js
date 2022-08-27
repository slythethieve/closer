import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/dashboard/Dashboard';
import Login from './Pages/Login';



function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element = {<Dashboard />} />
            <Route path='/login' element = {<Login />} /> 
            
          </Routes>
        </div>
      </Router>
      
    </>
    
  );
}

export default App;
