import React from "react";

const UserNameSectionComponent = (props) => {
  const { userName, setUserName } = props;

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  return (
    <input
      type="text"
      value={userName}
      placeholder="Username"
      onChange={onChangeHandler}
    ></input>
  );
};

export const UserNameSection = UserNameSectionComponent;
