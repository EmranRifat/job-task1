import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Home/Dashboard';
import Home from './Pages/Home/Home';
import Sidebar from './Pages/Home/Sidebar';
import Navar from './Shared/Navar';

function App() {
  return (
    <div>
     <Navar/>
     {/* <Nav></Nav> */}
     <Routes>
      
     <Route path="/" element={<Home />}>
      <Route index element={<Sidebar></Sidebar>}></Route>
      {/* <Route index element={<Dashboard></Dashboard>}></Route> */}
     </Route>

      </Routes>
    </div>
  );
}

export default App;
