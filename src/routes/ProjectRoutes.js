const express = require("express");
const router = express.Router();

const ProjectController = require("../controllers/ProjectController");

router.get("/", ProjectController.listAllProjects);
router.post("/", ProjectController.addNewProject);

module.exports = router;