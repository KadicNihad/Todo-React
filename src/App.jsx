import Tasks from './pages/Tasks.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';
import './App.css';

function App() {

  return (
      <Router>
            <NavBar />
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
      </Router>
  )
}

export default App
