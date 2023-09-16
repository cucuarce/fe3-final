import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import { Routes, Route, Navigate } from 'react-router-dom';
import Detail from './Routes/Detail'


function App() {
  return (

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="dentist/:id" element={<Detail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="favs" element={<Favs />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>

  );
}

export default App;
