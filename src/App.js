
import './App.css';
import Contact from './Component/contact/Contact';
import Home from './Component/home/Home';
import HowItWorks from './Component/how_it_works/HowItWorks';
import Menu from './Component/menu/Menu';
import Navbar from './Component/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Home/>
      <HowItWorks/>
      <Menu/>
      <Contact/>
    </div>
  );
}

export default App;
