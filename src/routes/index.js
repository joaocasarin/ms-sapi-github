const ProjectRoutes = require('./ProjectRoutes');
const defaultRoutes = require('./defaultRoutes');

module.exports = app => {
    app.use('/', defaultRoutes);
    app.use('/projects', ProjectRoutes);
};