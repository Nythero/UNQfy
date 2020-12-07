const express = require("express");
const router = express.Router();

const monitorManager = require("../monitorManager");

const triggerMonitor = function (req, res, next) {
  const monitor = req.params.serviceMonitor;
  const body    = req.body;

  monitorManager.trigger(monitor, body.state);

  res.status(204).send();
};

const getMonitors = function (req, res, next) {
  res.status(200).send(monitorManager.monitors);
};

router.get("/", getMonitors);

router.post("/:serviceMonitor", triggerMonitor);

module.exports = router;
