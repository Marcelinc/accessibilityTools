import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UniversiteOne from './pages/UniversiteOne';
import UniversityTwo from './pages/UniversityTwo';
import Welcome from './pages/Welcome';
import TaskInfoPage from './pages/TaskInfoPage';
import TaskCompleted from './pages/TaskCompleted';
import UniversityThree from './pages/UniversityThree';
import Final from './pages/Final';
import { createContext, useState } from 'react';

const TRESC1 = 'Spośród dostępnych narzędzi na stronie wykorzystaj to, które zmieni kontrast na czarno-żółty'
const TRESC2 = 'Znajdź i zastosuj narzędzie do zwiększenia czcionki na stronie niż jest ona domyślnie ustawiona'
const TRESC3 = 'Odnajdź przycisk do zmiany kontrastu i zmień kolorystykę strony na ciemną'

function App() {

  const [time1,setTime1] = useState(0)
  const [time2,setTime2] = useState(0)
  const [time3,setTime3] = useState(0)

  const TimeContext = createContext()

  return (
    <Router>
      <Routes>
        <TimeContext.Provider value={{time1,setTime1,time2,setTime2,time3,setTime3}}>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/task1A' element={<TaskInfoPage strona={1} zadanie={1} tresc={TRESC1} destiny='/site1A'/>}/>
          <Route path='/task1B' element={<TaskInfoPage strona={1} zadanie={1} tresc={TRESC1} destiny='/site1B'/>}/>
          <Route path='/task1A/complete' element={<TaskCompleted/>}/>
          <Route path='/task1B/complete' element={<TaskCompleted/>}/>
          <Route path='/task2A' element={<TaskInfoPage strona={2} zadanie={2} tresc={TRESC2} destiny='/site2A'/>}/>
          <Route path='/task2B' element={<TaskInfoPage strona={2} zadanie={2} tresc={TRESC2} destiny='/site2B'/>}/>
          <Route path='/task2A/complete' element={<TaskCompleted/>}/>
          <Route path='/task2B/complete' element={<TaskCompleted/>}/>
          <Route path='/task3A' element={<TaskInfoPage strona={3} zadanie={3} tresc={TRESC3} destiny='/site3A'/>}/>
          <Route path='/task3B' element={<TaskInfoPage strona={3} zadanie={3} tresc={TRESC3} destiny='/site3B'/>}/>
          <Route path='/task3/complete' element={<TaskCompleted final={true}/>}/>
          <Route path='/site1A' element={<UniversiteOne version='A'/>}/>
          <Route path='/site1B' element={<UniversiteOne version='B'/>}/>
          <Route path='/site2A' element={<UniversityTwo version='A'/>}/>
          <Route path='/site2B' element={<UniversityTwo version='B'/>}/>
          <Route path='/site3A' element={<UniversityThree version='A'/>}/>
          <Route path='/site3B' element={<UniversityThree version='B'/>}/>
          <Route path='/final' element={<Final/>}/>
        </TimeContext.Provider>
      </Routes>
    </Router>
  );
}

export default App;
