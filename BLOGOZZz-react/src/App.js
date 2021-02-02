import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import BlogDetails from "./Components/Blogdetails";
import Create from "./Components/Create";
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
  <Router>
      <div className="App">
        <Navbar />
       <Switch>
         <Route exact path="/" >
            < Home />
         </Route>
          <Route path="/create" >
            < Create />
         </Route>
          <Route path="/blogs/:num" >
            <  BlogDetails/>
         </Route>
       </Switch>
      </div>
  </Router>
  );
}

export default App;
