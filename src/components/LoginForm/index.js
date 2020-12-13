import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { LockOpenOutlined } from "@material-ui/icons";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from "@material-ui/core";

const LoginForm = ({ onLogin }) => {
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
    onLogin(formState.user)
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
    <Container maxWidth="xs" className="login-form" onSubmit={onSubmit}>
      <Box display="flex" justifyContent="center">
        <LockOpenOutlined />
      </Box>
      <Typography component="h1" variant="h5" align="center">
        Log in
      </Typography>
      <form>
        {formState.error ? (
          <Box my="1rem">
            <Alert severity="error">{formState.error}</Alert>
          </Box>
        ) : null}
        <Box mb="1rem">
          <TextField
            name="username"
            required
            variant="outlined"
            fullWidth
            label="Username"
            value={formState.user.username}
            onChange={handleChange}
          />
        </Box>
        <Box mb="1rem">
          <TextField
            name="password"
            required
            variant="outlined"
            type="password"
            label="Password"
            fullWidth
            value={formState.user.password}
            onChange={handleChange}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          disabled={formState.loading}
        >
          Log in
        </Button>
        <Box display="flex" justifyContent="space-between" mt="1rem">
          <Link to="/forgot-password">Забыли пароль?</Link>
          <Link to="/signup">Зарегистрироваться</Link>
        </Box>
      </form>
    </Container>
  );
};

export default LoginForm;
