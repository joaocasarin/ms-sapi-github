const Project = require("../models/ProjectSchema");

class ProjectController {
    async addNewProject(req, res) {
        try {
            const data = await Project.create(req.body);
            return res.send(data);
        } catch(error) {
            return res.send(error);
        }
    }
    
    async listAllProjects(req, res) {
        try {
            const data = await Project.find({});
            return res.send(data);
        } catch(error) {
            return res.send(error);
        }
    }
}

module.exports = new ProjectController();