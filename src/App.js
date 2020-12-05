import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeListComponent from "./components/EmployeeListComponent";
import HeaderComponent from "./components/HeaderComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          &nbsp;
          <div className="container">
            <Switch> http://localhost:9090/
              <Route path="/" exact component={EmployeeListComponent}></Route>
              <Route path="/employees" component={EmployeeListComponent}></Route>
              <Route path="/add-employees" component={AddEmployeeComponent}></Route>
              <Route path="/update-employees/:id" component={UpdateEmployeeComponent}></Route>
              <Route path="/view-employees/:id" component={ViewEmployeeComponent}></Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
