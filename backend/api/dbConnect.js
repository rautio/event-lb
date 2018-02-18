import mysql from 'mysql';
export default mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  port            : '3306'
});
