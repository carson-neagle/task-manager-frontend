//Dependencies
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Form, Container, Nav, Navbar, Button } from "react-bootstrap";
import './App.css';
import Tasks from "./components/tasks.js";
import Create from "./components/create.js"

function App() {
  return (
    <div className="App" style ={{ backgroundImage: `url(https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg)`}}>
      <header>
              <h1 className="JCD To-Do">Get Your Tasks Done!</h1>
          <Router>
              <Container>
                <Navbar bg="dark" expand="lg">
                  <Container>
                  <Navbar.Brand>JCD</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link>
                        <Link to="/">To-Do List</Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/create">Create an Event</Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Container>
          </Router>
    </header>
            <Routes>
              <Route exact path="/" element={<Tasks/>}></Route>
              <Route path="/create" element={<Create/>}></Route>
            </Routes>

    </div>
  );
}

export default App;
