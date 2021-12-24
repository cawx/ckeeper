import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from "./components/Landing"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
