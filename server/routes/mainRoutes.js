const path = require('path');

module.exports = app => {
    app.use(app.static(path.join('../client', 'build')));
    app.get('/', function(req, res) {
        res.sendFile(path.join('../client', 'build', 'index.html'));
    });
};
