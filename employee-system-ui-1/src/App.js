
import './App.css';
import NavBar from './components/NavBar';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import FetchEmployees from './components/FetchEmployees';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<FetchEmployees/>}/> 
      <Route path="/" element={<FetchEmployees/>}/>
      <Route path="/AddEmployee" element={<AddEmployee/>}/>
      <Route path="/EditEmployee/:id" element={<EditEmployee/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
