import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
 import NavBar from './Components/NavBar';
 import Characters from './pages/Characters';
  import Starships from './pages/Starships';
   import Planets from './pages/Planets'; 
   import Films from './pages/Films';
export default function App() {
  return (
<Router>
      <NavBar />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Router>
  )
}

