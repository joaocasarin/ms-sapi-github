const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    app: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
    logo: {
        type: String,
        required: false
    }
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;