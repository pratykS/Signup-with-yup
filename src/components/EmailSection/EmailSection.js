import React, { useState } from "react";
import { string } from "yup";

const EmailSectionComponent = (props) => {
  const { email, setEmail } = props;
  // const [valid, setValid] = useState(false);

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
    // setValid(
    //   string().email("Invalid email address").required("Email required")
    // );
  };

  // const onBlurHandler = () => {
  //   setValid(string().email().isValidSync(email));
  // };

  return (
    <React.Fragment>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={onChangeHandler}
        // onBlur={onBlurHandler}
      ></input>
      {/* {!valid ? "Email doesn't look right" : null} */}
    </React.Fragment>
  );
};

export const EmailSection = EmailSectionComponent;
