const connection = require('./connection');

const orm = {
    selectAll: function(table, cb){
        connection.query('SELECT * FROM ??', [table], (err, result) => {
            if(err){
                throw err;
            }

            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb){
        const query = `INSERT INTO ?? (??) VALUES (?)`
        connection.query(query, [table, cols.toString(), vals.toString()], (err, result) => {
            if(err){
                throw err;
            }

            cb(result);
        })
    },
    updateOne: function(table, updateObject, condition, cb){
        const query = 'UPDATE ?? SET ? WHERE ' + condition
        connection.query(query, [table, updateObject], (err, result) => {
            if(err){
                throw err;
            }

            cb(result);
        })

    }
}

module.exports = orm;