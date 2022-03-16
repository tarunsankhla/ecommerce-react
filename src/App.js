import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
     
       <Navbar/>
       <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
