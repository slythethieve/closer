import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/dashboard/Dashboard';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Quote from './Pages/forms/Quote'
import Single from './Pages/single/Single';


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
              <Route path=":orderId" element={<Single />} />
            </Route>
            <Route path='/new' element= {<Quote />} />
            
          </Routes>
        </div>
      </Router>
      
    </>
    
  );
}

export default App;
