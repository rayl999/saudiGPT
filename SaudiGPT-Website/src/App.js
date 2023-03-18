import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./Home/Home";
import LocationComponent from "./Output/Output";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Output" element={<LocationComponent />}/>

          <Route path="*" element={<div>test</div>}/>
        </Routes>
    </Router>
  );
}

export default App;