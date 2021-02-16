import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SignUpValidationSchema } from "../../utils";
import useDebounce from "../../utils/debounce";
import { Username } from "../../services/UsernameService";
import { Errortag } from "../../components";

const SignupSchema = SignUpValidationSchema;

const SignupFormComponent = (props) => {
  const { name, setName, submit, setSubmit } = props;

  //   const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  //   const [submit, setSubmit] = useState(false);
  const [userNameAvailability, setUserNameAvailability] = useState(false);

  const debouncedUserName = useDebounce(userName, 500);

  useEffect(() => {
    async function fetchUsernames(debouncedUserName) {
      if (debouncedUserName) {
        const result = await Username(debouncedUserName);
        const usernames = result && result.usernames;
        if (usernames) {
          if (usernames.includes(userName)) {
            setUserNameAvailability(true);
          } else {
            setUserNameAvailability(false);
          }
        }
      }
    }
    fetchUsernames(debouncedUserName);
  }, [userName, debouncedUserName]);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema,
  });

  const onSubmit = (data) => {
    setSubmit(true);
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onUsernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  return !submit ? (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={onChangeHandler}
          ref={register}
        />
        {errors.name && <Errortag message={errors.name.message} />}
      </div>
      <div>
        <input placeholder="Email" type="text" name="email" ref={register} />
        {errors.email && <Errortag message={errors.email.message} />}
      </div>
      <div>
        <input
          placeholder="Username"
          type="text"
          name="username"
          ref={register}
          value={userName}
          onChange={onUsernameChangeHandler}
        />
        <p className="username-info">
          <b>10, 177</b> usernames are already <u>taken</u>
        </p>
        {userNameAvailability ? (
          <Errortag message={`${userName} is already taken`}></Errortag>
        ) : null}
        {errors.username && <Errortag message={errors.username.message} />}
      </div>
      <div>
        <input
          placeholder="Password"
          type="text"
          name="password"
          ref={register}
        />
        {errors.password && <Errortag message={errors.password.message} />}
      </div>
      <div>
        <input
          placeholder="Password Confirm"
          type="text"
          name="confirmPassword"
          ref={register}
        />
        {errors.confirmPassword && (
          <Errortag message={errors.confirmPassword.message} />
        )}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  ) : null;
};

export const SignupForm = SignupFormComponent;
