import React, { useEffect, useState } from "react";

const DatePicker = (props) => {
  const [dateTitle, setDateTitle] = useState("");
  const [dateValue, setDateValue] = useState("");

  useEffect(() => {
    setDateTitle(props.title);
  }, [props]);
  console.log(dateValue);

  return (
    <div>
      <label className="inputLabel">{dateTitle}</label>
      <input
        className="inputTexte"
        type="date"
        id={dateTitle.replace(/ /g, "")}
        //   ref={beginning}
        required
        onChange={(e) => setDateValue(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
