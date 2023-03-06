import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js";
import { taskService } from "../services/task.service.js";

import { TaskList } from "../cmps/task-list.jsx";
import { TaskFilter } from "../cmps/task-filter.jsx";

export function TaskIndex() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    loadTasks(null);
  }, []);

  async function loadTasks(filter) {
    try {
      const tasks = await taskService.query(filter);
      setTasks(tasks);
    } catch (err) {
      console.log("Cannot load tasks", err);
      throw err;
    }
  }

  if (!tasks) return <div>loading </div>;
  else
    return (
      <div className="index-layout">
        <nav>
          <div>
            <button>Generate Tasks</button>
            <button>Clear Tasks</button>
            <button>Create New Tasks</button>
            <button>Stop Task Worker</button>
          </div>
          <TaskFilter />
        </nav>
        <TaskList tasks={tasks} />
      </div>
    );
}
