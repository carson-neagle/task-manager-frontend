//Dependencies
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css"

//Tasks Pulled From Backend
export default function TaskList() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const response = await fetch("mongodb+srv://JCDToDo:JCDToDo@cluster0.15aoum5.mongodb.net/?retryWrites=true&w=majorit");
      
      if (!response.ok) {
        const message = "An error occurred"
        window.alert(message);
        return;
      }

      const tasks = await response.json();
      setTasks(tasks);
    }

    getTasks();

    return;
  }, []);

  //Display Tasks on Tasks Route
  const display = tasks.map(task => {
    return (
      <div>
        <p key={task._id}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>
                {task.name}
              </Card.Title>
              <Card.Text>
                <p>{task.description}</p>
                <p>{task.priority}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </p>
      </div>
    )
})
      return(
        <div>
          {tasks.length && display}
        </div>
      )
}