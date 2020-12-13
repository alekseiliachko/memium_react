import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
} from "@material-ui/core";
import { HowToReg } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";

const genders = ["Male", "Female", "Another"];

const SignupForm = ({ onSignUp }) => {
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
    onSignUp(formState.user)
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
    <Container maxWidth="xs" className="login-form" onSubmit={onSubmit}>
      <Box display="flex" justifyContent="center">
        <HowToReg />
      </Box>
      <Typography component="h1" variant="h5" align="center">
        Sign in
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
            name="email"
            required
            variant="outlined"
            label="E-mail"
            fullWidth
            value={formState.user.email}
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
        <Box mb="1rem">
          <TextField
            name="bio"
            required
            label="Bio"
            variant="outlined"
            fullWidth
            rows={4}
            multiline
            value={formState.user.bio}
            onChange={handleChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb="1rem">
          <TextField
            name="name"
            required
            label="Name"
            variant="outlined"
            value={formState.user.name}
            onChange={handleChange}
          />
          <TextField
            name="gender"
            required
            select
            label="Gender"
            onChange={handleChange}
            variant="outlined"
            value={formState.user.gender}
            onChange={handleChange}
          >
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          disabled={formState.loading}
        >
          Sign in
        </Button>
        <Box display="flex" justifyContent="center" mt="1rem">
          <Link to="/login">Войти</Link>
        </Box>
      </form>
    </Container>
  );
};

export default SignupForm;
