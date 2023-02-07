// import { storageService } from './async-storage.service.js'
import { httpService } from "./http.service.js"
import { utilService } from "./util.service.js"
import axios from "axios"

const STORAGE_KEY = "task_db"
const BASE_URL = "task/"
// _createTasks()

export const taskService = {
  query,
  getById,
  save,
  remove,
  addTaskMsg,
  getListings
}
window.cs = taskService;

async function getListings(hostId) {
  const queryParams = `?hostId=${hostId}`;
  const tasks = await httpService.get(BASE_URL + queryParams);
  return tasks
}

async function query(filterBy) {
  const queryParams = `?`;
  const tasks = await httpService.get(BASE_URL + queryParams);
  return tasks
}

function getById(taskId) {
  // return storageService.get(STORAGE_KEY, taskId)
  return httpService.get(`task/${taskId}`);
}

async function remove(taskId) {
  // await storageService.remove(STORAGE_KEY, taskId)
  return httpService.delete(`task/${taskId}`);
}
async function save(task) {
  var savedTask
  if (task._id) {
    savedTask = await httpService.put(`task/${task._id}`, task);
  } else {
    savedTask = await httpService.post("task", task);
  }
  return savedTask
}

async function addTaskMsg(taskId, txt) {
  const savedMsg = await httpService.post(`task/${taskId}/msg`, { txt });
  return savedMsg
}
