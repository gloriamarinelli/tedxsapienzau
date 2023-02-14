import mysql from "mysql";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root.2223",	
	database: "tedxsapienzau",
});
