const taskService = require("./task.service.js");
const externalService = require("../../services/external.service");

const logger = require("../../services/logger.service");

async function getTasks(req, res) {
  try {
    logger.debug("Getting Tasks");
    const filterBy = {
      where: req.query?.where || "",
    };
    const tasks = await taskService.query(filterBy);
    res.json(tasks);
  } catch (err) {
    logger.error("Failed to get tasks", err);
    res.status(500).send({ err: "Failed to get tasks" });
  }
}

async function getTaskById(req, res) {
  try {
    const taskId = req.params.id;
    const task = await taskService.getById(taskId);
    res.json(task);
  } catch (err) {
    logger.error("Failed to get task", err);
    res.status(500).send({ err: "Failed to get task" });
  }
}

async function addTask(req, res) {
  try {
    const task = req.body;
    const addedTask = await taskService.add(task);
    res.json(addedTask);
  } catch (err) {
    logger.error("Failed to add task", err);
    res.status(500).send({ err: "Failed to add task" });
  }
}

async function updateTask(req, res) {
  try {
    const task = req.body;
    const updatedTask = await taskService.update(task);
    res.json(updatedTask);
  } catch (err) {
    logger.error("Failed to update task", err);
    res.status(500).send({ err: "Failed to update task" });
  }
}

async function performTask(req, res) {
  const taskId = req.params.id;
  try {
    const status = "running";
    var performedTask = await taskService.update(taskId, status);
    const executedTask = await externalService.execute(performedTask);
    console.log(executedTask);
    if (executedTask) {
      performedTask = await taskService.update(taskId, "done");
    }
    res.json(performedTask);
  } catch (err) {
    performedTask = await taskService.update(taskId, "failed");
    logger.error("Failed to perform task", err);
    res.status(500).send({ err: "Failed to perform task" });
  }
}

async function removeTask(req, res) {
  try {
    const taskId = req.params.id;
    const removedId = await taskService.remove(taskId);
    res.send(removedId);
  } catch (err) {
    logger.error("Failed to remove task", err);
    res.status(500).send({ err: "Failed to remove task" });
  }
}

async function addTaskMsg(req, res) {
  const { loggedinUser } = req;
  try {
    const taskId = req.params.id;
    const msg = {
      txt: req.body.txt,
      by: loggedinUser,
    };
    const savedMsg = await taskService.addTaskMsg(taskId, msg);
    res.json(savedMsg);
  } catch (err) {
    logger.error("Failed to update task", err);
    res.status(500).send({ err: "Failed to update task" });
  }
}

async function removeTaskMsg(req, res) {
  const { loggedinUser } = req;
  try {
    const taskId = req.params.id;
    const { msgId } = req.params;

    const removedId = await taskService.removeTaskMsg(taskId, msgId);
    res.send(removedId);
  } catch (err) {
    logger.error("Failed to remove task msg", err);
    res.status(500).send({ err: "Failed to remove task msg" });
  }
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  removeTask,
  addTaskMsg,
  removeTaskMsg,
  performTask,
};
