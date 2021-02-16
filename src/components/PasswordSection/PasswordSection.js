import React from "react";

const PasswordSectionComponent = (props) => {
  const { password, setPassword } = props;

  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChangeHandler}
      ></input>
      <input
        type="password"
        placeholder="PasswordConfirm"
        value={password}
        onChange={onChangeHandler}
      ></input>
    </React.Fragment>
  );
};

export const PasswordSection = PasswordSectionComponent;
