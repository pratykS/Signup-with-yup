import React from "react";

const NameSectionComponent = (props) => {
  const { name, setName, register, nameLabel, errors } = props;

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={onChangeHandler}
        ref={register}
        name={nameLabel}
      ></input>
      {errors.name && (
        <span className="errorMessage">{errors.name.message}</span>
      )}
    </React.Fragment>
  );
};

export const NameSection = NameSectionComponent;
