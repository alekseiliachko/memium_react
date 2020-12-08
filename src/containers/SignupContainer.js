import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SignupForm } from "../components";
import { signupAttempt } from "../redux/auth/actions";

const SignupContainer = (props) => {
  const initialState = {
    user: {
      username: "",
      password: "",
      bio: "",
      gender: "Another",
      name: "",
      email: "",
    },
    loading: false,
    error: null,
  };
  const [formState, setFormState] = useState(initialState);
  const history = useHistory();
  const onSubmit = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    e.preventDefault();
    props
      .onSignUp(formState.user)
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        setFormState((prevState) => ({
          ...prevState,
          loading: false,
          error: "Проверьте введенные вами данные!",
        }));
      });
  };
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, [e.target.name]: e.target.value },
      error: null,
    }));
  };
  return (
    <SignupForm
      onSubmit={onSubmit}
      formState={formState}
      handleChange={handleChange}
    />
  );
};

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSignUp: (userInfo) => dispatch(signupAttempt(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
