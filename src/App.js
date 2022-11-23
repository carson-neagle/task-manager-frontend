//Dependencies
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Helmet} from 'react-helmet'
import "./App.css";
import Home from "./components/home.js";
import TaskList from "./components/tasks.js";
import Create from "./components/create.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url("https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg")`}}>
      <Helmet>
            <style>{'body { background-color: rgb(78,53,36); }'}</style>
      </Helmet>
          <Router>
                <Navbar>
                  <Container>
                    <Nav>
                        <Link className="navHeader" to="/">Home</Link>
                        <Link className="createButton" to="/create"><strong>+</strong></Link>
                        <Link className="taskList" to="/tasks">To-Do List</Link>
                    </Nav>
                  </Container>
                </Navbar>
               

            <Routes>
             <Route exact path="/" element={<Home/>}></Route>
             <Route path="/create" element={<Create/>}></Route>
             <Route path="/tasks" element={<TaskList/>}></Route>
            </Routes>
            </Router>
    </div>   
  );
}

export default App;
