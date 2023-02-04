import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "root2021",
  database:"tedxsapienzau"
})