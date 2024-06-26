import './App.css';
import Header from './comp/Header';
import AddStudent from './comp/AddStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
