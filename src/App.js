
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Showcase from './components/showcase';
import Wears from './components/wears';
import Meal from './components/meal';
import Gym from './components/gym';

function App() {
  return (
    <Router>
       <Header />

      <Routes>
     <Route path="/" element= { <Showcase /> }/>
     {/* <Route path="/Card" element= { <Card /> }/> */}
     {/* <Route path="/Landing" element= { <Landing /> }/> */}
     <Route path="/WEAR" element= { <Wears /> }/>
     { <Route path="/Meal" element= { <Meal /> }/> }
     <Route path="/GYM" element= { <Gym /> }/>
      </Routes>   
    </Router>
  );
}

export default App;
