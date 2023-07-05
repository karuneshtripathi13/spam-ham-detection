import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={ <Home/>}>
        </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;