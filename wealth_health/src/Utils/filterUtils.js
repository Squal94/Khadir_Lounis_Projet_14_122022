function employeeFilter(data, value) {
  const keys = [
    "firstName",
    "lastName",
    // "DateofBirth",
    // "StartDate",
    "street",
    "city",
    // "zipCode",
  ];

  return data.filter((employee) =>
    keys.some((key) => employee[key].toLowerCase().includes(value))
  );
}

export { employeeFilter };
