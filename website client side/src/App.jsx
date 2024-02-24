import './App.css'
import Registraion from './components/registration'
import LoginForm from '../src/components/LoginForm';
import {Route,Routes} from 'react-router-dom' 

function App() {
  
  return (
    <>
      <div>
      <Routes>
        <Route index element={<Registraion />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      
      </div>
      
    </>
  )
}

export default App
