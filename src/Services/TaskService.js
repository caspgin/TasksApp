import TaskModel from "../models/TaskModel.js";

class TaskService {
  static async getAll() {
    return TaskModel.find().exec();
  }

  static async getById(id) {
    return TaskModel.findById(id).exec();
  }

  static async createTask(taskObject) {
    if (!taskObject.name) {
      throw new Error();
    }
    if (!taskObject.startDate) {
      // eslint-disable-next-line no-param-reassign
      taskObject.startDate = Date.now();
    }
    const createdTask = new TaskModel(taskObject);
    const savedTask = await createdTask.save();
    return savedTask;
  }

  static async deleteTask(id) {
    return TaskModel.findByIdAndDelete(id).exec();
  }

  static deleteAll() {
    return TaskModel.deleteMany().exec();
  }

  static async updateTask(id, opt) {
    return TaskModel.findByIdAndUpdate(id, opt).exec();
  }
}

export default TaskService;
