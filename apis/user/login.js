const dbConnection = require("../../db/db_mysql");
const jwt = require('jsonwebtoken');
const tokenKey = process.env.TOKEN_KEY || "9FbpyQaOdS4/aWtRYEw3d8CzKlgZbUwNfPEfIqaVErE=";

exports.validate = function (req, res, next) {
    if (!req.body && !req.body.username && !req.body.password) {
        res.status(201).json({
            data: "ส่งค่ามาไม่ครบถ้วน",
            success: false,
            error: null
        });
    } else {
        next();
    }
}

exports.find = function (req, res, next) {
    checkData(req, function(resp){
        if (resp) {
            const token = jwt.sign(
                {user: 1},
                tokenKey || 'default_secret',
                {expiresIn: '24h'}
            );
            var respData = {
                user_id: 1,
                user_name: "user test",
                user_username: "test",
                user_type: 1,
                token: token,
            }
            res.status(200).json({
                data: respData,
                success: true,
                error: null
            });
        } else {
            res.status(201).json({
                data: "username หรือ password ไม่ถูกต้อง",
                success: false,
                error: null
            });
        }
    });
}

function checkData(req, callback) {
    if (req.body.username == "test" && req.body.password == "1234"){
        callback(true);
    }else{
        callback(false);
    }
}