const connection = require('./connection');

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
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
        const query = "UPDATE ?? SET " + objToSql(updateObject) + " WHERE " + condition
        connection.query(query, [table, condition], (err, result) => {
            if(err){
                throw err;
            }

            cb(result);
        })

    }
}

module.exports = orm;