import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../redux";

function AllTasksContainer({ tasksData, getAllTasks }) {
  useEffect(() => {
    getAllTasks();
  }, []);
  console.log(tasksData);
  return tasksData.loading ? (
    <h2>Loading</h2>
  ) : tasksData.error ? (
    <h2>{tasksData.error}</h2>
  ) : (
    <div>
      <h2>Tasks List</h2>
      <div className="row">
        {tasksData &&
          tasksData.tasks &&
          tasksData.tasks.map((task) => (
            <div className="col-sm-4">
              <div
                className="card"
                style={{ width: "200px", height: "180px", padding: "10px" }}
              >
                <p>
                  {task.uid}
                </p>
                <p>
                  {task.task}
                </p>
                <p>
                  {task.type}
                  </p>
                <div className="card-body">
                  <p className="card-title">{task.describe}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasksData: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasks: () => dispatch(getAllTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);
