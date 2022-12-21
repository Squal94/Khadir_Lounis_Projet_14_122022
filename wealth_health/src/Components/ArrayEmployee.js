import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortTest } from "./../Features/employee.slice";

const ArrayEmployee = () => {
  const dataStoreEmployee = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  //   console.log(dataStoreEmployee);
  return (
    <div className="arrayContainer">
      <table>
        <thead>
          <tr>
            <th
              id="columnFirst"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              First Name
            </th>
            <th
              id="columnLast"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              Last Name
            </th>
            <th
              id="columnStart"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              Start Date
            </th>
            <th
              id="columnDepartement"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              Departement
            </th>
            <th
              id="columnBirth"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              Date of Birth
            </th>
            <th
              id="columnStreet"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              Street
            </th>
            <th
              id="columnCity"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              City
            </th>
            <th
              id="columnState"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              State
            </th>
            <th
              id="columnZip"
              onClick={(e) => {
                dispatch(sortTest(e.target.id));
              }}
            >
              Zip Code
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataStoreEmployee.map((employee, key) => {
            return (
              <tr key={key}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.StartDate}</td>
                <td>""</td>
                <td>{employee.DateofBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>""</td>
                <td>{employee.zipCode}</td>
                <td>bouton</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayEmployee;
