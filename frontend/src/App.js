import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/dashboard/Dashboard';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Invoice from './Pages/forms/Invoice';



function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element = {<Dashboard />} />
            <Route path='/login' element = {<Login />} /> 
            <Route path='/orders'>
              <Route index element={<List />} />
            </Route>
            <Route path='/new' element= {<Invoice />} />
            
          </Routes>
        </div>
      </Router>
      
    </>
    
  );
}

export default App;
