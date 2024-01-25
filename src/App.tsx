import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Freyja from './views/Freyja';
import Login from './views/Login';
import RegisterStep1 from './views/RegisterStep1';
import Registerstep2 from './views/RegisterStep2';

function App() {

  return (
    <>
      <Routes>
          {/* 路由表 */}
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path="/freyja" element={<Freyja />}>
              <Route path="login" element={<Login />} />
              <Route path="registerstep1" element={<RegisterStep1 />} />
              <Route path="Registerstep2" element={<Registerstep2 />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
