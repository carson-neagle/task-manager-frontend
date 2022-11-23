import React from "react";
import "../App.css";



function Create(data) {
  
  let message = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }


  return (
    <div className="addTask">
      <main>
        <h1>Add a New Task</h1>
        {message}
        <form  method="POST" action="https://localhost:5400/tasks" >
          <div className="row">
            <div className="form-group col-xs-6">
              <label htmlFor="name">Task Name</label>
              <input className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group col-xs-6">
              <label htmlFor="pic">Task Type</label>
              <input className="form-control" id="type" name="type" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-xs-4">
              <label htmlFor="city">Priority</label>
              <input className="form-control" id="priority" name="priority" />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Task" />
        </form>
      </main>
      </div>
  );
}

export default Create;