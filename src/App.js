
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Showcase from './components/showcase';
import Wears from './components/wears';
import Wear from './components/wear';
import Meal from './components/meal';
import Contact from './components/contact';
import Gym from './components/gym';




function App() {
  return (
    <Router>
       <Header />

      <Routes>
     <Route path="/" element= { <Showcase /> }/>
     <Route path="/wears" element= { <Wears /> }/>
     <Route path="/wears/:wearId" element= { <Wear /> }/>
     <Route path="/Meal" element= { <Meal /> }/> 
     <Route path="/Contact" element= { <Contact /> }/>
     <Route path="/GYM" element= { <Gym /> }/>

      </Routes>   
    </Router>
  );
}

export default App;
