import { Routes, Route } from 'react-router-dom'

import Home from './views/Home'

function App() {

  return (
    <>
      <Routes>
          {/* 路由表 */}
          <Route path='/' element={<Home/>} />    
      </Routes>
    </>
  )
}

export default App
