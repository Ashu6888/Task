import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {useLocation, Routes, Route } from "react-router-dom"
import Layout from './UI/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const location = useLocation();
  const path = location?.pathname;
  return (
   <div>
      {path.includes("user-") || path === '/'  ? (
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      ) : (
    <Layout>
       <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </Layout>
  )}
   </div>
  );
}

export default App;
