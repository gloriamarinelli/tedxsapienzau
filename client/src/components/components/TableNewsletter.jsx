import React from "react";
import "../../index.css";

export default function TableNewsletter({ id, email, time }) {
  return (
    <table>
      <tr>
        <th>Email</th>
        <th>Time</th>
      </tr>
      <tr>
        <td>{email}</td>
        <td>{time}</td>
      </tr>
    </table>
  );
}
