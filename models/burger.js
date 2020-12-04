const orm = require('../config/orm');

const burger = {
    getAll: function(cb){
        orm.selectAll("burgers", (data) => {
            cb(data);
        })
    },
    create: function(col, val, cb){
        orm.insertOne("burgers", col, val, (data) => {
            cb(data);
        })
    },
    update: function(updateObj, condition, cb){
        orm.updateOne("burgers", updateObj, condition, (data) => {
            cb(data);
        })
    }
}

module.exports = burger;