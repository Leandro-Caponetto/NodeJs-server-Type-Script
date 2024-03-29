/** @format */

const express = require("express");
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
