import mysql from 'mysql2/promise'
//to create a pool to handle multiple connection request
const pool = mysql.createPool({
	host : 'localhost',
	username : 'root',
	password : '',
	database : 'studentmanagement',
	connectionLimit : 10,
	waitForConnections : true
	});

//creating a function for establishing connection
async function establishConnection()
{
	try{
		//to establish connection
		const con = await pool.getConnection()
		//to display connection created
		console.log("Connected to MySQL")
		con.release();
	}
	catch(err)
	{
		console.log("Unable to connect with database ",err);
	}
}
//calling the function to test the connection
establishConnection();

export default pool;