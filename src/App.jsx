import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Help from './Help';

const App = () => {
  return (
    <>

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </Router>
    </>

  );
};

export default App;