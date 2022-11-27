import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';

import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import Default from './pages/default/default';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Default />} />

        </Route>
      </Routes>
  )
}

export default App
