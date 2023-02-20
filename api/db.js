import mysql from "mysql";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	port: "8889",
	database: "tedxsapienzau",
});
