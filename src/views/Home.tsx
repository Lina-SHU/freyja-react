import { NavLink } from 'react-router-dom'

const Home = () => {
    return (<>
        <h1>首頁</h1>
        <NavLink to="/freyja/login" className="btn btn-primary">登入頁</NavLink>
    </>)
};

export default Home;