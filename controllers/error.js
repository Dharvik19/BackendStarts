const path = require('path');

const rootDir = require('../util/path');

exports.error=(req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}