import * as http from "http";
import mongoose from "mongoose";
import App from "../../app.js";
import config from "../config/config.js";

const port = 3000;

const server = http.createServer(App());

mongoose
  .connect(config.database.dsn)
  .then(() => {
    config.database.status.connected = true;
    server.listen(port);
  })
  .catch((error) => {
    config.database.status.error = error;
    console.log(error);
  });

server.on("listening", () => {
  console.log(server.address());
  console.log(`Server listening on 3000 ${server.address().toString()}`);
});
