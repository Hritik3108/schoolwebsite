import './App.css'
import Registraion from './components/registration'
import LoginForm from '../src/components/LoginForm';
import {Route,Routes} from 'react-router-dom' 
import ChangePassword from './components/changePassword';
import Home from './components/home';
import NavBar from './components/sidebar';
import Attendence from './components/attendence';

function App() {
  
  return (
    <>
      <div>
      <NavBar />
      <Routes>
      <Route index element={<Registraion />} />
        <Route path="/registration" element={<Registraion />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/attendence' element={<Attendence />} />
      </Routes>
      

      </div>
      
    </>
  )
}

export default App
