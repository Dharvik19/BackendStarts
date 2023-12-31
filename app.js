const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

const errorController = require('./controllers/error');
app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactRoutes);

app.use(errorController.error);

app.listen(3000);