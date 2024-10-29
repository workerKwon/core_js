import { start } from "live-server";

const params = {
  host: "localhost",
  port: 3000,
  open: false,
  root: "./client",
};

start(params);
