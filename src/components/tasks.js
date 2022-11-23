//Dependencies
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';



//Tasks Pulled From Backend
export default function TaskList() {
  const[tasks, setTasks ] = useState([]);


  useEffect(() => {
    async function getTasks() {
      const response = await fetch("https://jcd-todo.herokuapp.com/tasks");
      
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


//Delete
function deleteTask(id){
  fetch(`https://jcd-todo.herokuapp.com/tasks/${id}`),{
    method: 'DELETE'
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
}


  //Display Tasks on Task Route
  const display = tasks.map(task => {
    return (

        <div key={task._id} className="col-md-4"> 
       {/* {-- <ul> --} */}
          <Card style={{ width: "20rem" }}  >
            <Card.Body>
              <Card.Title>
              <strong><u> {JSON.stringify(task.name)}</u></strong>
              </Card.Title>
              <Card.Text>
                {JSON.stringify(task.type)}
              </Card.Text>
              <Card.Text>
              {JSON.stringify(task.priority)}
              </Card.Text>
              <Button class="btn btn-danger" onClick={()=>deleteTask()}>Done</Button>
            </Card.Body>
          </Card>
        {/* </ul> */}
        </div>
    )
});


      return(
        <div className="row" id="task">
          {tasks.length && display}
          
        </div>
      );


}
}
