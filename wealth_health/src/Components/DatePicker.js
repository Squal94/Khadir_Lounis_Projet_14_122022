import React, { useEffect, useState } from "react";

const DatePicker = (props) => {
  const [dateTitle, setDateTitle] = useState("");

  useEffect(() => {
    setDateTitle(props.title);
  }, [props]);

  return (
    <div className="datePicker">
      <label className="datePicker__label inputLabel">{dateTitle}</label>
      <input
        placeholder=" "
        className="datePicker__input"
        type="date"
        id={dateTitle.replace(/ /g, "")}
        required
      />
    </div>
  );
};

export default DatePicker;
