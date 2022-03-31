import "./App.css";
import { BrowserRouter,Route, Switch,NavLink, Redirect } from "react-router-dom";

//page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Article from "./pages/Article";
import logo from "./img/bocacodelogo.png"


function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <nav className="header">
        <img src={logo} alt="img" className="logo" />
          {/* <h1>Boca Code News</h1> */}
          <NavLink exact to ="/">News</NavLink>
          {/* <NavLink to ="/about">About</NavLink>
          <NavLink to ="/contact">Contact</NavLink> */}
        </nav>
        <hr/>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/articles/:id"> 
            <Article/>
          </Route>
          <Route path="*">
            <Redirect to="/" />
             </Route> 
          </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
