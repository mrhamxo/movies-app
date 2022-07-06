import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
// import Error from './components/Error';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </div>
  );
}

export default App;
