import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [error, setError] = useState(false);
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header--title">HRnet</h1>
        <NavLink className="home__header--nav" to="/employee">
          View Current Employees
        </NavLink>
      </div>
      <div className="home__form">
        <h2 className="home__form--title">Create Employee</h2>
        <form>
          <div className="home__form__firstName">
            <label className="inputLabel">First Name</label>
            <input
              className="inputTexte"
              type="text"
              id="firstName"
              placeholder="Eric"
              //   ref={firstName}
              required
            />
          </div>
          <div className="home__form__lastName">
            <label className="inputLabel">Last Name</label>
            <input
              className="inputTexte"
              type="text"
              id="lastName"
              placeholder="Durant"
              //   ref={LastName}
              required
            />
          </div>
          <div className="home__form__birthday">
            <label className="inputLabel">Date of Birth</label>
            <input
              className="inputTexte"
              type="date"
              id="birthday"
              //   ref={birthday}
              required
            />
          </div>
          <div className="home__form__beginning">
            <label className="inputLabel">Start Date</label>
            <input
              className="inputTexte"
              type="date"
              id="beginning"
              //   ref={beginning}
              required
            />
          </div>
          <fieldset>
            <legend>Address</legend>
            <div className="home__form__street">
              <label className="inputLabel">Street</label>
              <input
                className="inputTexte"
                type="text"
                id="street"
                placeholder="19 boulvard de la concorde"
                //   ref={street}
                required
              />
            </div>
            <div className="home__form__city">
              <label className="inputLabel">City</label>
              <input
                className="inputTexte"
                type="text"
                id="city"
                placeholder="Paris"
                //   ref={city}
                required
              />
            </div>
            <div className="home__form__zipCode">
              <label className="inputLabel">Zip Code</label>
              <input
                className="inputTexte"
                type="number"
                id="zipCode"
                min="0"
                max="100"
                //   ref={zipCode}
                required
              />
            </div>
          </fieldset>
          <div className="home__form__department">
            <label for="department">Department</label>

            <select
              name="department"
              id="department"
              // ref={department}
            >
              <option value="">--Choose an option--</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="engineering">Engineering</option>
              <option value="resources">Human Resources</option>
              <option value="legal">Legal</option>
            </select>
          </div>
          <span className="formContainer--error">
            {error && "Email ou mot de passe incorrect"}
          </span>

          <input type="submit" className="home__form__submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default Home;
