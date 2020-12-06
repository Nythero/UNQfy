const express = require("express");
const router = express.Router();

const monitorManager = require("../monitorManager");

const checkService = function (req, res, next) {
  const service = req.params.serviceName;

  monitorManager.check(service)
    .then(isOn => {
      const message = `El servicio ${service} ` + ((isOn)? "funciona con normalidad" : "esta fuera de servicio");

      res.status(200).send({ message: message });
    });
};

const getServices = function (req, res, next) {
  res.status(200).send({ message: monitorManager.monitors});
}

router.get("/", getServices);

router.get("/:serviceName", checkService);

module.exports = router;
