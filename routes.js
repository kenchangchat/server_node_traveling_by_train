
// require('./config/connect').connect();
const express = require('express');
const cors = require('cors');
const auth = require('./apis/_managers/auth');
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.rootPath = '/api';
var url = express.Router();

// login
var getUser = require('./apis/user/login'); url.post('/login', getUser.validate, getUser.find);

// รายการสถานีรถไฟฟ้า
var getStationsList = require('./apis/station/getStationsList'); url.post('/getStationsList', auth, getStationsList.find);

// ข้อมูลละเอียดสถานี
var getStationsList = require('./apis/station/getStationsDetail'); url.post('/getStationsDetail', getStationsList.validate, auth, getStationsList.find);

// การเดินทาง
var getRoute = require('./apis/station/getRoute'); url.post('/getRoute', getRoute.validate, auth, getRoute.find);


app.use(app.rootPath, url);
module.exports = app;