import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FrontPage from './components/FrontPage/FrontPage';
import SingleArticle from './components/Article/SingleArticle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">      
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />}/>
          <Route path="/article" element={<SingleArticle />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
