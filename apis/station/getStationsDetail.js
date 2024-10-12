
exports.validate = function (req, res, next) {
    if (!req.body) {
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
    getData(req, function (err, dataList) {
        if (err) {
            res.status(201).json({
                data: null,
                success: false,
                error: err
            });
        } else {
            res.status(200).json({
                data: dataList,
                success: true,
                error: null
            });
        }
    });
}
function getData(req, callback) {
    var data = {
        "station_id": 1,
        "name": "Mo Chit",
        "code": "N8",
        "line": "BTS Green Line",
        "lat": 13.802,
        "lng": 100.551,
        "facilities": [
            "Elevators",
            "Wheelchair Access",
            "Public Restrooms"
        ],
        "nearby_places": [
            {"name": "Chatuchak Weekend Market", "distance": "300 meters"},
            {"name": "Chatuchak Park", "distance": "200 meters"}
        ],
        "first_train": "05:00 AM",
        "last_train": "11:00 PM"
    };
    callback(null, data);
}