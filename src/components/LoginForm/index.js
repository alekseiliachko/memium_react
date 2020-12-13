import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { LockOpenOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import Alert from "@material-ui/lab/Alert";

const LoginForm = ({ onSubmit, formState, handleChange }) => {
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
