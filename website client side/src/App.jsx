import './App.css'
import Registraion from './components/registration'
import LoginForm from '../src/components/LoginForm';
import {Route,Routes} from 'react-router-dom' 
import ChangePassword from './components/changePassword';
import Home from './components/home';

function App() {
  
  return (
    <>
      <div>
      <Routes>
      <Route index element={<Registraion />} />
        <Route path="/registration" element={<Registraion />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      
      </div>
      
    </>
  )
}

export default App
