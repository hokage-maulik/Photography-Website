import { Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './Component/About';
import Clent from './Component/Clent';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
// import Randompage from './Component/Randompage';
import Album1 from './Component/Album1';
import Mainpage from './Component/Mainpage';
import About from './Component/About';
import Album2 from './Component/Album2';
import Album3 from './Component/Album3';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Portfolio/> */}
      {/* <Randompage/> */}
      {/* <Contact/> */}
      {/* <Clent/> */}

      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>


        <Route path='/client' element={<Clent/>}/>
        <Route path='/album1' element={<Album1/>}/>
        <Route path='/album2' element={<Album2/>}/>
        <Route path='/album3' element={<Album3/>}/>


      </Routes>
    </div>
  );
}

export default App;
