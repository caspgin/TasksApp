import express from "express";
import routes from "./src/Router/index.js";
import errorHandler from "./src/middleware/errorHandler.js";

function App() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes());

  app.use(errorHandler);
  return app;
}

export default App;
