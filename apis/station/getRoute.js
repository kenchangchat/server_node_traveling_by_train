
exports.validate = function (req, res, next) {
    if (!req.body && !req.body.from_station_id && !req.body.to_station_id) {
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
    var dataList = [];
    var data = {
        "from_station": {
            "name": "หมอชิต",
            "code": "N8",
            "line": "BTS สายสีเขียว"
        },
        "to_station": {
            "name": "สุขุมวิท",
            "code": "BL21",
            "line": "MRT สายสีน้ำเงิน"
        },
        "lines": [
            {
                "line": "BTS สายสีเขียว",
                "color": "green",
                "stations": [
                    {"name": "หมอชิต", "code": "N8"},
                    {"name": "สะพานควาย", "code": "N7"},
                    {"name": "อารีย์", "code": "N5"},
                    {"name": "สนามเป้า", "code": "N4"},
                    {"name": "อนุสาวรีย์ชัยสมรภูมิ", "code": "N3"},
                    {"name": "พญาไท", "code": "N2"}
                ],
                "fare": 40,
                "time": 30
            },
            {
                "line": "BTS สายสีเขียว - MRT สายสีน้ำเงิน",
                "color": "grey",
                "stations": [],
                "fare": 0,
                "time": 5
            },
            {
                "line": "MRT สายสีน้ำเงิน",
                "color": "blue",
                "stations": [
                    {"name": "เพชรบุรี", "code": "BL20"},
                    {"name": "สุขุมวิท", "code": "BL21"}
                ],
                "fare": 30,
                "time": 10
            }
        ],
        "total_stations": 8,
        "total_time": 45,
        "total_fare": 70,
        "fare_breakdown": [
            { "line": "BTS สายสีเขียว",
                "fare": 40
            },
            {
                "line": "MRT สายสีน้ำเงิน",
                "fare": 30
            }
        ]
    };
    dataList.push(data);
    callback(null, dataList);
}