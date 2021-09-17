import React from "react";

export default function AddStud({ fname, roll, index }) {
  return (
    <tr key={fname + index}>
      <td>{index}</td>
      <td>{fname}</td>
      <td>{roll}</td>
    </tr>
  );
}
