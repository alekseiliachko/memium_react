import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { LoginForm } from "../components";
import { loginAttempt } from "../redux/auth/actions";

const LoginContainer = (props) => {
  const initialState = {
    user: { username: "", password: "" },
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
      .onLogin(formState.user)
      .then((res) => {
        history.push("/home");
      })
      .catch((err) => {
        setFormState((prevState) => ({
          ...prevState,
          loading: false,
          error: "Неверные логин или пароль",
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
    <LoginForm
      onSubmit={onSubmit}
      formState={formState}
      handleChange={handleChange}
    />
  );
};

const mapStateToProps = (store) => ({
  error: store.authReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (userInfo) => dispatch(loginAttempt(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
