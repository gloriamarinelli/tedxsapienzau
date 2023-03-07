import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = {
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	port: "3306",
	database: process.env.DATABASE,
};

export var db;

function handleDisconnect() {
	db = mysql.createConnection(configuration);

	db.connect(function (err) {
		if (err) {
			console.log("error when connecting to db:", err);
			setTimeout(handleDisconnect, 2000);
		} else {
			console.log("connection is successfull");
		}
	});
	db.on("error", function (err) {
		console.log("db error", err);
		if (err.code === "PROTOCOL_CONNECTION_LOST") {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}
handleDisconnect();
