import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import routes from './routes';
import Home from './pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    // FOR NAVBAR DO NOT DELETE--------------
    <>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
    </>
   
    // END OF NAVBAR -----------------
  );
};

export default App;
