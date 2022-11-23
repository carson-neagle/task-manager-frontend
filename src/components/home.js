import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

function Home() {
  return (
 <div>
    <br></br>
            <Card style={{ width: "40rem" }} className="homeCard">
              <Card.Body>
                <Card.Title> <strong><u>Welcome to Your To-Do List</u></strong> </Card.Title>
                <Card.Text>Here you will see the tasks that you need to get done for today. Make sure that you set their priority so that you know how important it is to you.</Card.Text>
                <Card.Text>This is the line that determines how important it is to you To Do!</Card.Text>
              </Card.Body>
            </Card>
            </div>
  );
}

export default Home;