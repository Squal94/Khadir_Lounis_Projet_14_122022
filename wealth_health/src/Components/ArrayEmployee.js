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
              onClick={() => {
                dispatch(sortTest());
              }}
            >
              First Name
            </th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Departement</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
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
