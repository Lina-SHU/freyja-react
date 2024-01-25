import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './views/Home';
import Freyja from './views/Freyja';
import Login from './views/Login';
import RegisterStep1 from './views/RegisterStep1';
import Registerstep2 from './views/RegisterStep2';
import RoomList from './views/RoomList';

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Routes>
          {/* 路由表 */}
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path="/freyja" element={<Freyja />}>
              <Route path="login" element={<Login />} />
              <Route path="registerstep1" element={<RegisterStep1 />} />
              <Route path="Registerstep2" element={<Registerstep2 />} />
          </Route>
          <Route path='/roomlist' element={<RoomList />} />            
      </Routes>
    </>
  )
}

export default App
