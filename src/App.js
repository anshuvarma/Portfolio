import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Works";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/works' element={<Work />} />
        </Routes>
      </>
    
  );
}

export default App;
