import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";


import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
