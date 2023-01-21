import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UniversiteOne from './pages/UniversiteOne';
import UniversityTwo from './pages/UniversityTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/site1' element={<UniversiteOne/>}/>
        <Route path='/site2' element={<UniversityTwo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
