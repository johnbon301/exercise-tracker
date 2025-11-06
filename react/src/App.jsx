import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';

function App() {

  const [EditToExercise, setEditToExercise] = useState();


  return (
    <div className="app">
        <Router>
          <h1 className='homepage-header'>Exercise Tracker</h1>
          <p>Welcome to the Exercise Tracker, Create to get Started</p>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage setEditToExercise={setEditToExercise} />}></Route>
            <Route path="/add-exercise" element={ <AddExercisePage />}></Route>
            <Route path="/edit-exercise" element={ <EditExercisePage EditToExercise={EditToExercise} />}></Route>
          </Routes>
        </Router>
        <footer>© 2025 Jonathan Ferman-Ramirez </footer>
    </div>
            
  ); 
}

export default App;