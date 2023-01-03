import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortEmployee } from "../Features/editArrayContent.slice";
import { arrowToogle } from "./../Utils/functionUtils";

import Arrow from "./Arrow";

const ArrayEmployee = () => {
  const dispatch = useDispatch();
  const arrowSelector = useSelector((state) => state.employee.arrow);
  const dataStoreEmployee = useSelector(
    (state) => state.employee.filterEmployees
  );
  // console.log(numberLine, dataLength);
  arrowToogle(arrowSelector);

  return (
    // <div className="arrayContainer">
    <table>
      <thead>
        <tr>
          <th>
            <div
              className="thForme"
              id="columnFirst"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              First Name <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnLast"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              Last Name <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnStart"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              Start Date <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnDepartement"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              Departement <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnBirth"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              Date of Birth <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnStreet"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              Street <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnCity"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              City <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnState"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              State <Arrow />
            </div>
          </th>
          <th>
            <div
              className="thForme"
              id="columnZip"
              onClick={(e) => {
                dispatch(sortEmployee(e.target.id));
              }}
            >
              Zip Code <Arrow />
            </div>
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
              <td>{employee.beginning}</td>
              <td>{employee.department}</td>
              <td>{employee.birthday}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
              <td>bouton</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    // </div>
  );
};

export default ArrayEmployee;
