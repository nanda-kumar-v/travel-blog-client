import './App.css';
import About from './Pages/About';
import AdminLogin from './Pages/AdminLogin';
import AdminMain from './Pages/AdminMain';
import Blogs from './Pages/Blogs';
import HeroPage from './Pages/HeroPage';
import { Routes, Route } from 'react-router-dom'
import UserLogin from './Pages/UserLogin';
import UserMain from './Pages/UserMain';
import UserRegister from './Pages/UserRegister';
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HeroPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminmain" element={<AdminMain />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usermain" element={<UserMain />} />
        <Route path="/userregister" element={<UserRegister />} />

      </Routes>
    </>
  );
}

export default App;
