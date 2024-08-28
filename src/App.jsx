import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Help from './Help';
import Feedback from './Feedback'


const App = () => {
  return (
    <>

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Feedback" element={<Feedback />}/>
      </Routes>
    </Router>
    </>

  );
};

export default App;