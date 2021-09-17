import React, { useState } from "react";
import "./forms.css";
import AddStud from "./addStud";

export default function Forms() {
  const [studName, setStudName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studData, setStudData] = useState([]);
  let cloneStud = [];

  return (
    <div>
      <label>
        Student Name :
        <input
          type="text"
          value={studName}
          onChange={(event) => {
            setStudName(event.target.value);
          }}
        />
      </label>
      <label>
        Roll No :
        <input
          type="text"
          value={rollNo}
          onChange={(event) => {
            setRollNo(event.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          let newStud = {
            fname: studName,
            roll: rollNo,
          };
          cloneStud.push(newStud);
          setStudName("");
          setRollNo("");
          setStudData(cloneStud);
        }}
      >
        Submit
      </button>
      <br />
      ‏‏‏
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {studData.map((a, index) => {
            return <AddStud roll={a.roll} fname={a.fname} index={index + 1} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
