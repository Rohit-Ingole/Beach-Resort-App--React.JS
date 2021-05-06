import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/rooms/:id" component={SingleRoom} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
