import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Homepage } from "./Components/Homepage";
import './App.css';
import {Thankyou} from './Thankyoupage/Thankyou'

function App() {
  return (
    <div className="Main-container">
      
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/thankyoupage" element={<Thankyou/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
