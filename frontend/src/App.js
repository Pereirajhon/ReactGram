import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Login from './Auth/Login';
import Register from './Auth/Register';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <> 
      <BrowserRouter>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element= {<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
