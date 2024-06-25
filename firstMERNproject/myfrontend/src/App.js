import Header from './comp/Header';
import AddStudent from './comp/AddStudent';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Route path="/add" component={AddStudent}/>

        <AddStudent/>
      </div>
    </Router>
  );
}

export default App;
