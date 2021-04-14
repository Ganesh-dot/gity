import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/section/Home";
import { Table } from "./components/section/Table";
import { LogIn } from "./components/section/LogIn";
import { GridCard } from "./components/section/GridCard";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Table" component={Table} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/GridCard" component={GridCard} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
