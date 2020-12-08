const express = require("express");
const app     = express();
const port    = 5003;
const bodyParser      = require("body-parser");
const errorHandling   = require("./middlewares/handleErrors");
const badParsingError = require("./middlewares/badParsing");
const defaultRoute    = require("./routes/defaultRoute");
const servicesRoutes  = require("./routes/servicesRoutes");
const monitorsRoutes  = require("./routes/monitorRoutes");

const monitor = require("./monitor");


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
