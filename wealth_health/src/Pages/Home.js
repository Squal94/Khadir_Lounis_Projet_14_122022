import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dataEmployee from "./../Assets/Data.json";
import departement from "../Assets/departementData";
import states from "../Assets/stateData";
import arrowImg from "./../Assets/img/angle-arrow-down.png";
import ModalSubmit from "./../Components/ModalSubmit";
import DatePicker from "../Components/DatePicker";
import { newEmployee } from "./../Features/editArrayContent.slice";
import { saveEmployee } from "./../Utils/functionUtils";
import { open } from "./../Features/modal.slice";
import { SelectItem } from "@squal94/selectcomponent14v7";
import { sortEmployee } from "../Features/editArrayContent.slice";

/**
 * Const Home
 * Const HomeReact Component Created to contain and complete pages Home with the form
 * for new employees and connect dispatch actions with the store.
 */

const Home = () => {
  const openModal = useSelector((state) => state.modal.isOpened);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="home">
        <div className="home__header">
          <h1 className="home__header--title">HRnet</h1>
          <NavLink
            className="home__header--nav"
            to="/employee"
            onClick={(e) => {
              dispatch(sortEmployee("columnFirst"));
            }}
          >
            View Current Employees
          </NavLink>
        </div>
        <div className="home__form">
          <h2 className="home__form--title">Create Employee</h2>
          <form
            onSubmit={(e) => {
              let employee = saveEmployee(e, dataEmployee);
              dispatch(newEmployee(employee));
              dispatch(open());
            }}
          >
            <div className="home__form__firstName">
              <label htmlFor="firstName" className="inputLabel">
                First Name
              </label>
              <input
                className="inputTexte"
                type="text"
                id="firstName"
                placeholder="Eric"
                required
              />
            </div>
            <div className="home__form__lastName">
              <label htmlFor="lastName" className="inputLabel">
                Last Name
              </label>
              <input
                className="inputTexte"
                type="text"
                id="lastName"
                placeholder="Durant"
                required
              />
            </div>
            <div className="home__form__birthday">
              <DatePicker title={"Date of Birth"} />
            </div>
            <div className="home__form__beginning">
              <DatePicker title={"Start Date"} />
            </div>
            <fieldset>
              <legend className="inputLabel">Address</legend>
              <div className="home__form__street">
                <label htmlFor="street" className="inputLabel">
                  Street
                </label>
                <input
                  className="inputTexte"
                  type="text"
                  id="street"
                  placeholder="19 boulvard de la concorde"
                  required
                />
              </div>
              <div className="home__form__city">
                <label htmlFor="city" className="inputLabel">
                  City
                </label>
                <input
                  className="inputTexte"
                  type="text"
                  id="city"
                  placeholder="Paris"
                  required
                />
              </div>
              <div className="home__form__state">
                <label className="selectLabel">State</label>
                <SelectItem
                  arrayProps={states}
                  selectImg={arrowImg}
                  selectClass="state"
                />
              </div>
              <div></div>
              <div className="home__form__zipCode">
                <label htmlFor="zipCode" className="inputLabel">
                  Zip Code
                </label>
                <input
                  className="inputTexte"
                  type="number"
                  id="zipCode"
                  min="0"
                  max="100"
                  required
                />
              </div>
            </fieldset>
            <div className="home__form__department">
              <label className="selectLabel">Department</label>
              <SelectItem
                arrayProps={departement}
                selectImg={arrowImg}
                selectClass="departement"
              />
            </div>
            <div className="home__form__containerSubmit">
              <input
                type="submit"
                className="home__form__containerSubmit--submit"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
      {openModal === true && <ModalSubmit />}
    </div>
  );
};

export default Home;
