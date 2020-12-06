const express = require("express");
const app     = express();
const port    = 5000;
const bodyParser      = require("body-parser");
const errorHandling   = require("../../api/middlewares/handleErrors");
const badParsingError = require("../../api/middlewares/badParsing");
const defaultRoute    = require("../../api/routes/defaultRoute");
const servicesRoutes  = require("./servicesRoutes");
const monitorsRoutes   = require("./monitorRoutes");

const monitor = require("../monitor");


const PATH = "/api";

app.use(bodyParser.json());

app.use(badParsingError);

app.use(PATH + "/services", servicesRoutes);

app.use(PATH + "/monitors", monitorsRoutes);

app.use(defaultRoute)

app.use(errorHandling);

app.listen(port, () => {
  console.log(`Monitor app listening at http://localhost:${port}`);
});
