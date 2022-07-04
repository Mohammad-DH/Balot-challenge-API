const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { Admin, Public, Authentication } = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.use("/api/admin", Admin);
app.use("/api", Public);
app.use("/api/authentication", Authentication);

app.listen(3000, () => console.log("Example app listening on port 3000!"));

module.exports = {
  app,
};
