import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/header.js';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Profitability from './components/Profitability';
import Liquidity from './components/Liquidity';
import Activity from './components/Activity';
import Risk from './components/Risk';
import About from './components/About.js';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Profitability />
      <Liquidity />
      <Activity />
      <Risk />
      <Footer />
    </div>
  );
}

export default App;
