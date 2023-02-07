const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const utilService = require("../../services/util.service");
const ObjectId = require("mongodb").ObjectId;
const { log } = require("../../middlewares/logger.middleware");
const fs = require("fs");
const external = require("../../services/external.service");

async function query(filterBy) {
  try {
    // const criteria = _buildCriteria(filterBy);
    const collection = await dbService.getCollection("task");
    var tasks = await collection.find().toArray();
    return tasks
  } catch (err) {
    logger.error("cannot find tasks", err);
    throw err;
  }
}

async function getById(taskId) {
  try {
    const collection = await dbService.getCollection("task");
    console.log(taskId);
    const task = collection.findOne({ _id: new ObjectId(taskId) });
    return task;
  } catch (err) {
    logger.error(`while finding task ${taskId}`, err);
    throw err;
  }
}

async function remove(taskId) {
  try {
    const collection = await dbService.getCollection("task");
    await collection.deleteOne({ _id: new ObjectId(taskId) });
    return taskId;
  } catch (err) {
    logger.error(`cannot remove task ${taskId}`, err);
    throw err;
  }
}

async function add(task) {
  try {
    const collection = await dbService.getCollection("task");
    await collection.insertOne(task);
    return task;
  } catch (err) {
    logger.error("cannot insert task", err);
    throw err;
  }
}

async function update(taskId, status) {
  try {
    const taskToSave = {
      status,
    };
    console.log(taskToSave);
    const collection = await dbService.getCollection("task");
    console.log(taskId);
    await collection.updateOne({ _id: new ObjectId(taskId) }, { $set: taskToSave });

    return taskId;
  } catch (err) {
    logger.error(`cannot update task ${taskId}`, err);
    throw err;
  }
}

async function addTaskMsg(taskId, msg) {
  try {
    msg.id = utilService.makeId();
    const collection = await dbService.getCollection("task");
    await collection.updateOne({ _id: { taskId } }, { $push: { msgs: msg } });
    return msg;
  } catch (err) {
    logger.error(`cannot add task msg ${taskId}`, err);
    throw err;
  }
}

async function removeTaskMsg(taskId, msgId) {
  try {
    const collection = await dbService.getCollection("task");
    await collection.updateOne(
      { _id: ObjectId(taskId) },
      { $pull: { msgs: { id: msgId } } }
    );
    return msgId;
  } catch (err) {
    logger.error(`cannot add task msg ${taskId}`, err);
    throw err;
  }
}

// function _buildCriteria(filterBy) {
//   let criteria = {};
//   const txtCriteria = { $regex: new RegExp(filterBy.where, "ig") };
//   // criteria = {
//   //   "loc.country": txtCriteria,
//   // }
//   criteria.$or = [
//     {
//       "loc.country": txtCriteria,
//     },
//     {
//       "loc.city": txtCriteria,
//     },
//     {
//       "loc.address": txtCriteria,
//     }
//   ]

//   return criteria;
// }

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
  addTaskMsg,
  removeTaskMsg,
};
