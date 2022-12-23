import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortEmployee } from "../Features/editArrayContent.slice";
import Arrow from "./Arrow";

const ArrayEmployee = () => {
  const dataStoreEmployee = useSelector((state) => state.employee.data);
  const arrowSelector = useSelector((state) => state.employee.arrow);
  const arrowselectAll = document.querySelectorAll(".thForme");
  const dispatch = useDispatch();

  function arrowToogle() {
    let eltSelected;
    arrowselectAll.forEach((elt) => {
      const arrowUp = elt.querySelector(".arrowContainer__up");
      const arrowDown = elt.querySelector(".arrowContainer__down");

      elt.addEventListener("click", () => {
        eltSelected = elt.id;
        if (arrowSelector) {
          arrowUp.classList.remove("colorSelect");
          arrowDown.classList.remove("colorWhite");
          arrowUp.classList.add("colorWhite");
          arrowDown.classList.add("colorSelect");
        } else {
          arrowUp.classList.remove("colorWhite");
          arrowDown.classList.remove("colorSelect");
          arrowUp.classList.add("colorSelect");
          arrowDown.classList.add("colorWhite");
        }
        arrowselectAll.forEach((elt) => {
          if (elt.id !== eltSelected) {
            elt
              .querySelector(".arrowContainer__up")
              .classList.remove("colorWhite", "colorSelect");
            elt
              .querySelector(".arrowContainer__down")
              .classList.remove("colorWhite", "colorSelect");
          }
        });
      });
    });
  }
  return (
    <div className="arrayContainer">
      <table>
        <thead>
          <tr>
            <th>
              <div
                className="thForme"
                id="columnFirst"
                onClick={(e) => {
                  dispatch(sortEmployee(e.target.id));
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
                  arrowToogle();
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
