/*import React from 'react';
import Layout from "./components/Layout/Layout";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import Pagenotfound from "./pages/Pagenotfound"

function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout1/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
        </Layout>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
