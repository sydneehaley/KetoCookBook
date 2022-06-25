import './app.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
