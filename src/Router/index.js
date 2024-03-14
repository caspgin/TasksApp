import { Router } from "express";
import TaskService from "../Services/TaskService.js";

const router = Router();

const routes = () => {
  router.get("/tasks", async (req, res) => {
    const tasks = await TaskService.getAll();
    res.json(tasks);
    res.end();
  });

  router.get("/task/:id", async (req, res, next) => {
    try {
      const task = await TaskService.getById(req.params.id);
      res.send(task);
    } catch (err) {
      next(err);
    }
  });

  router.post("/task", async (req, res, next) => {
    try {
      await TaskService.createTask(req.body);
      res.send("Created!");
    } catch (err) {
      next(err);
    }
  });

  router.put("/task/:id", async (req, res, next) => {
    try {
      const task = await TaskService.updateTask(req.params.id, req.body);
      res.send(task);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/task/:id", async (req, res, next) => {
    try {
      const deleted = await TaskService.deleteTask(req.params.id);
      console.log(deleted);
      res.json({
        message: "Deleted!",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/tasks", async (req, res, next) => {
    try {
      const deleted = await TaskService.deleteAll();
      res.json({
        message: "All Deleted!",
        count: `${deleted.deletedCount}`,
      });
    } catch (err) {
      next(err);
    }
  });
  router.use((req, res, next) => {
    const error = {
      status: 404,
      message: "Page not found",
    };
    next(error);
  });
  return router;
};

export default routes;
