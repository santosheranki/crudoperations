import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import Student from './Student'
function App() {
  return (
    <Router>
      <Routes>
        <Route exactpath="/" element={<Login/>}/>
        <Route exactpath="/dashboard" element={<Dashboard/>}/>
        <Route exactpath="/students" element={<Student/>}/>
      </Routes>
    </Router>
  );
}
export default App;
