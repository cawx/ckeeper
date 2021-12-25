import Nav from "./components/Navigation"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingNav from "./components/LandingNav"
import Register from "./components/Register"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      {/*<Nav />*/}
      <LandingNav />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
