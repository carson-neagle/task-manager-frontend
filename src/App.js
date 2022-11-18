//Dependencies
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Helmet} from 'react-helmet'
import "./App.css";
import Tasks from "./components/tasks.js";
import Create from "./components/create.js"

function App() {
  return (
    <div className="App">
      <Helmet>
            <style>{'body { background-color: rgb(78,53,36) }'}</style>
      </Helmet>
          <Router>
              <Container>
                <Navbar>
                  <Container className="navbar">
                    <Nav>
                      <Nav.Link>
                        <Link to="/"><h1>To-Do List</h1></Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/create"><h2>+</h2></Link>
                      </Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              </Container>  

            <Routes>
              <Route path="/" element={<Tasks/>}></Route>
              <Route path="/create" element={<Create/>}></Route>
            </Routes>
            </Router>
    </div>   
  );
}

export default App;
