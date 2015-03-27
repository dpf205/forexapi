exports.default = { 
  sequelize: function(api){
    return {
      "database"    : process.env.DB_DB,
      "dialect"     : "mysql",
      "port"        : 3306,
      "host"        : process.env.DB_HOST, 
      "username"    : process.env.DB_USER, 
      "password"    : process.env.DB_PASSWORD,
    };
  }
};

// You can define even more elaborate configurations (including replication).
// See http://sequelize.readthedocs.org/en/latest/api/sequelize/index.html for more information
// For example: 

// exports.production = { 
//   sequelize: function(api){
//     return {
//       "logging"     : false,
//       "database"    : "PRODUCTION_DB",
//       "dialect"     : "mysql",
//       "port"        : 3306,
//       "replication" : {
//         "write": {
//           "host"     : "127.0.0.1", 
//           "username" : "root", 
//           "password" : "",
//           "pool"     : {}
//         },
//         "read": [
//           {
//             "host"     : "127.0.0.1", 
//             "username" : "root", 
//             "password" : "",
//             "pool"     : {}
//           }
//         ]
//       }
//     }
//   }
// }
