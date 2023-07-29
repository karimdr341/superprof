import './App.css';
import Navbar from './modules/Navbar.jsx'
import Hero from './modules/Hero.jsx';
import Certificate from './modules/Certificate.jsx';
import { Learning } from './modules/Learning';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Certificate />
      <Learning/>
    </>
  );
}

export default App;
