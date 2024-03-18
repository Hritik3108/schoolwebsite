import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import 'bootstrap/dist/css/bootstrap.min.css';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVJ1WmFZfVpgdVVMZFlbRHBPMyBoS35RckVgWXlfcHBQRmZfWUJ+');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
