import {BrowserRouter as Router, Routes, Route,  Link} from "react-router-dom";

// components
import Hero from './components/hero';
import Products from './components/products';
import Footer from './components/footer';
import Downloads from './components/downloads';
import Inspect from 'inspx';
import ProjectDetailPage from "./pages/project-detail";

function App() {


  return (
        
    <div className="App">
    <div className="App">
      <div id='main-wrapper' className='bg-zinc-900 w-screen flex flex-col place-content-center'>
      <div id='content' className='flex flex-col p-4 pt-16 pb-60 pt-16 mb-16 m-auto gap-16 max-w-2xl sm:p-16'>
        <Hero />
        <Products />
        <Downloads />


        </div>

        <Footer />
      </div>
    </div>

  );
}

export default App;
