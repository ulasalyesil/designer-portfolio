// css
import './App.css';
import Downloads from './components/downloads';



// components
import Hero from './components/hero';
import Products from './components/products';
import Footer from './components/footer';
import Inspect from 'inspx';

function App() {
  return (
    <div className="App">
      <div id='main-wrapper' className='bg-zinc-900 w-screen h-full flex flex-col place-content-center'>
      <div id='content' className='flex flex-col p-16 mb-16 m-auto gap-16 max-w-2xl'>

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
