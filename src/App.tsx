import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from "./components/NavBar";
import Home from './views/Home';
import Freyja from './views/Freyja';
import Login from './views/Login';
import RegisterStep1 from './views/RegisterStep1';
import Registerstep2 from './views/RegisterStep2';
import RoomList from './views/RoomList';
import Member from './views/Member';
import MemberNav from './views/MemberNav';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Routes>
          {/* 路由表 */}
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          {/* 登入註冊 */}
          <Route path="/freyja" element={<Freyja />}>
              <Route path="login" element={<Login />} />
              <Route path="registerstep1" element={<RegisterStep1 />} />
              <Route path="Registerstep2" element={<Registerstep2 />} />
          </Route>
          <Route path='/roomlist' element={<RoomList />} />
          <Route path='/member' element={<Member />} >
              <Route path='memberinfo' element={<MemberNav />}></Route>
          </Route>         
      </Routes>
    </>
  )
}

export default App
