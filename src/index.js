import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import Linegraph from './graficos/Linegraph';
import Piegraph from './graficos/Piegraph';
import Stackedgraph from './graficos/Stackedgraph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Linegraph />} />
      <Route path="pie" element={<Piegraph />}/>
      <Route path="bar" element={<Stackedgraph />}/>
    </Routes>
  </BrowserRouter>
);