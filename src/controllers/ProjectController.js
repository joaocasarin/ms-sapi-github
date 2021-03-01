const Project = require("../models/ProjectSchema");

class ProjectController {
    async addNewProject(req, res) {
        try {
            if (req.headers.token === process.env.token) {
                const data = await Project.create(req.body);
                res.status(201).send(data);
            }
            else {
                res.status(401).send({
                    error: "Failed while authenticating."
                });
            }
        } catch(error) {
            return res.send({
                error: "Failed saving data to database."
            });
        }
    }
    
    async listAllProjects(req, res) {
        try {
            const data = await Project.find({}).select('-_id -__v');
            return res.send(data);
        } catch(error) {
            return res.send(error);
        }
    }
}

module.exports = new ProjectController();