import { createSlice, current } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";

const initialState = [...dataEmployee];
// console.log(initialState);
// current

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state = [...initialState], action) => {
      state.push(action.payload);
      console.log(current(state));
    },
    deleteEmployee: (state, action) => {},
    editEmployee: (state, action) => {},
    sortTest: (state, action) => {
      let toggle = true;
      let arrow = true;
      let choiceColumn;
      console.log(action.payload);
      switch (action.payload) {
        case "columnFirst":
          choiceColumn = "firstName";
          break;
        case "columnLast":
          choiceColumn = "lastName";
          break;
        case "columnStart":
          choiceColumn = "StartDate";
          break;
        case "columnDepartement":
          choiceColumn = "Departement";
          break;
        case "columnBirth":
          choiceColumn = "DateofBirth";
          break;
        case "columnStreet":
          choiceColumn = "street";
          break;
        case "columnCity":
          choiceColumn = "city";
          break;
        case "columnState":
          choiceColumn = "State";
          break;
        case "columnZip":
          choiceColumn = "zipCode";
          break;
        default:
          console.log(`Sorry, we are out of ${choiceColumn}.`);
      }

      if (toggle === true) {
        state.sort(function (a, b) {
          toggle = !toggle;
          arrow = !arrow;
          // console.log(arrow);
          // console.log(toggle);
          return a.zipCode - b.zipCode;
        });
      }
      if (toggle === false) {
        state.sort(function (a, b) {
          toggle = !toggle;
          arrow = !arrow;
          // console.log(arrow);
          // console.log(toggle);
          return b.zipCode - a.zipCode;
        });
      }
    },
    // logout: (state) => {
    //   // state.auth.Logged = !state.auth.Logged;
    //   state = initialState();
    //   return state;
    // },
    // infoUser: (state, action) => {
    //   state.firstName = action.payload[0];
    //   state.lastName = action.payload[1];
    // },
  },
});

export const { newEmployee, sortTest } = employeeSlice.actions;

export default employeeSlice.reducer;

// import { createSlice, current } from "@reduxjs/toolkit";
// import dataEmployee from "../Assets/Data.json";

// const initialState = [...dataEmployee];
// // console.log(initialState);
// // current

// export const employeeSlice = createSlice({
//   name: "employee",
//   initialState: initialState,
//   reducers: {
//     newEmployee: (state = [...initialState], action) => {
//       state.push(action.payload);
//       console.log(current(state));
//     },
//     deleteEmployee: (state, action) => {},
//     editEmployee: (state, action) => {},
//     sortTest: (state, action) => {
//       let toggle = true;
//       let arrow = true;
//       let choiceColumn = "";
//       console.log(action.payload);
//       switch (action.payload) {
//         case "columnFirst":
//           choiceColumn = "firstName";
//           break;
//         case "columnLast":
//           choiceColumn = "lastName";
//           break;
//         case "columnStart":
//           choiceColumn = "StartDate";
//           break;
//         case "columnDepartement":
//           choiceColumn = "Departement";
//           break;
//         case "columnBirth":
//           choiceColumn = "DateofBirth";
//           break;
//         case "columnStreet":
//           choiceColumn = "street";
//           break;
//         case "columnCity":
//           choiceColumn = "city";
//           break;
//         case "columnState":
//           choiceColumn = "State";
//           break;
//         case "columnZip":
//           choiceColumn = "zipCode";
//           break;
//         default:
//           console.log(`Sorry, we are out of ${choiceColumn}.`);
//       }

//       if (toggle === true) {
//         state.sort(function (a, b) {
//           toggle = !toggle;
//           arrow = !arrow;
//           // console.log(arrow);
//           // console.log(toggle);
//           return a.${choiceColumn} - b.choiceColumn;
//         });
//       }
//       if (toggle === false) {
//         state.sort(function (a, b) {
//           toggle = !toggle;
//           arrow = !arrow;
//           // console.log(arrow);
//           // console.log(toggle);
//           return b.choiceColumn - a.choiceColumn;
//         });
//       }
//     },
//     // logout: (state) => {
//     //   // state.auth.Logged = !state.auth.Logged;
//     //   state = initialState();
//     //   return state;
//     // },
//     // infoUser: (state, action) => {
//     //   state.firstName = action.payload[0];
//     //   state.lastName = action.payload[1];
//     // },
//   },
// });

// export const { newEmployee, sortTest } = employeeSlice.actions;

// export default employeeSlice.reducer;

// import { createSlice, current } from "@reduxjs/toolkit";
// import dataEmployee from "../Assets/Data.json";

// const initialState = [...dataEmployee];
// // console.log(initialState);
// // current

// export const employeeSlice = createSlice({
//   name: "employee",
//   initialState: initialState,
//   reducers: {
//     newEmployee: (state = [...initialState], action) => {
//       state.push(action.payload);
//       console.log(current(state));
//     },
//     deleteEmployee: (state, action) => {},
//     editEmployee: (state, action) => {},
//     sortTest: (state, action) => {
//       let toggle = true;
//       let arrow = true;
//       let choiceColumn = "";
//       console.log(action.payload);
//       switch (action.payload) {
//         case "columnFirst":
//           if (toggle === true) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return a.firstName - b.firstName;
//             });
//           }
//           if (toggle === false) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return b.firstName - a.firstName;
//             });
//           }
//           break;
//         case "columnLast":
//           if (toggle === true) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return a.lastName - b.lastName;
//             });
//           }
//           if (toggle === false) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return b.lastName - a.lastName;
//             });
//           }
//           break;
//         case "columnStart":
//           if (toggle === true) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return a.StartDate - b.StartDate;
//             });
//           }
//           if (toggle === false) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return b.StartDate - a.StartDate;
//             });
//           }
//           break;
//         case "columnDepartement":
//           choiceColumn = "Departement";
//           break;
//         case "columnBirth":
//           if (toggle === true) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return a.DateofBirth - b.StartDate;
//             });
//           }
//           if (toggle === false) {
//             state.sort(function (a, b) {
//               toggle = !toggle;
//               arrow = !arrow;
//               // console.log(arrow);
//               // console.log(toggle);
//               return b.DateofBirth - a.DateofBirth;
//             });
//           }
//           break;
//         case "columnStreet":
//           choiceColumn = "street";
//           break;
//         case "columnCity":
//           choiceColumn = "city";
//           break;
//         case "columnState":
//           choiceColumn = "State";
//           break;
//         case "columnZip":
//           choiceColumn = "zipCode";
//           break;
//         default:
//           console.log(`Sorry, we are out of ${choiceColumn}.`);
//       }

//       if (toggle === true) {
//         state.sort(function (a, b) {
//           toggle = !toggle;
//           arrow = !arrow;
//           // console.log(arrow);
//           // console.log(toggle);
//           return a.choiceColumn - b.choiceColumn;
//         });
//       }
//       if (toggle === false) {
//         state.sort(function (a, b) {
//           toggle = !toggle;
//           arrow = !arrow;
//           // console.log(arrow);
//           // console.log(toggle);
//           return b.choiceColumn - a.choiceColumn;
//         });
//       }
//     },
//     // logout: (state) => {
//     //   // state.auth.Logged = !state.auth.Logged;
//     //   state = initialState();
//     //   return state;
//     // },
//     // infoUser: (state, action) => {
//     //   state.firstName = action.payload[0];
//     //   state.lastName = action.payload[1];
//     // },
//   },
// });

// export const { newEmployee, sortTest } = employeeSlice.actions;

// export default employeeSlice.reducer;
