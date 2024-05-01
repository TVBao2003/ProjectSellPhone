var sql = require('mssql/msnodesqlv8');

var config = {
    server: "MSI\\MSSQLSERVER01",
    user: "bao",
    password: "12345",
    database: "QLGV1",
    driver: "msnodesqlv8",
    // options: {
    //     trustedConnection: true,
    //     trustServerCertificate: true,
    // },
    // connectionString: 'DSN=YourDSNName;'
    // options:{
    //     encrypt: false,
    //     enableArithAbort: false
    // },
    // connectionTimeout: 300000,
    // requestTimeout: 300000,
    // pool: {
    //     idleTimeoutMillis: 300000,
    //     max: 100
    // }
}



var conn = new sql.ConnectionPool(config).connect().then(pool=>pool).catch(err=>{console.log(err)});

module.exports = {conn: conn}