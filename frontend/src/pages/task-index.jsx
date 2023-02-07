import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js";
import { useState } from "react";
import { taskService } from "../services/task.service.js";

export function TaskIndex() {
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks(filter) {
    try {
      const tasks = await taskService.query(filter);
    } catch (err) {
      console.log("Cannot load tasks", err);
      throw err;
    }
  }

  // async function onRemoveTask(ev, taskId) {
  //     ev.stopPropagation()
  //     try {
  //         await removeTask(taskId)
  //         showSuccessMsg('Task removed')
  //     } catch (err) {
  //         showErrorMsg('Cannot remove task')
  //     }
  // }

  // async function onEditTask(ev, task) {
  //     ev.stopPropagation()

  // }

  return (
    <div className="index-layout">
      {/* <TaskList/>  */}

      <div>a new page</div>
    </div>
  );
}
