import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/Home";
import TravelMateMain from './components/TravelMateMain';
import SenimoMain from './components/SenimoMain';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tm" element={<TravelMateMain />}></Route>
        <Route path="/senimo" element={<SenimoMain />}></Route>
      </Routes>
    </div>
  );
}

export default App;
