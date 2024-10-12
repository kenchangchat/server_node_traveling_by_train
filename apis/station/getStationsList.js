
exports.find = function (req, res, next) {
    getDataList(req, function (err, dataList) {
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
function getDataList(req, callback) {
    var data = [
        {"station_id": 1, "type": "BTS", "name": "หมอชิต", "code": "N8", "lat": 13.802, "lng": 100.551,"first_train": "05:00","last_train": "11:00 ",},
        {"station_id": 2, "type": "BTS", "name": "พญาไท", "code": "N2", "lat": 13.755, "lng": 100.532,"first_train": "05:00","last_train": "11:00"},
        {"station_id": 3, "type": "BTS", "name": "สยาม", "code": "CEN", "lat": 13.745, "lng": 100.534,"first_train": "05:00","last_train": "11:00"},
        {"station_id": 4, "type": "MRT", "name": "สวนจตุจักร", "code": "BL13", "lat": 13.803, "lng": 100.553,"first_train": "05:00","last_train": "11:00"},
        {"station_id": 5, "type": "MRT", "name": "สุขุมวิท", "code": "BL21", "lat": 13.736, "lng": 100.560,"first_train": "05:00","last_train": "23:00"},
        {"station_id": 6, "type": "ARL", "name": "พญาไท", "code": "ARL1", "lat": 13.756, "lng": 100.532,"first_train": "05:00","last_train": "23:00"}
    ];
    callback(null, data);
}