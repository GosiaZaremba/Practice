import PetsIcon from "@mui/icons-material/Pets";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../db";

export const LoginRegister = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((response) => {
      setInputEmail("");
      setInputPassword("");
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(inputEmail, inputPassword);
  };

  const registerUser = async (email, password) => {
    // eslint-disable-next-line
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    setInputEmail("");
    setInputPassword("");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(inputEmail, inputPassword);
  };

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, inputEmail).then(() => {});
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PetsIcon sx={{ m: 1, fontSize: "60px" }}>
          <LockOutlinedIcon />
        </PetsIcon>
        <Typography component="h1" variant="h5">
          Zaloguj
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adres email"
            name="email"
            autoComplete="email"
            autoFocus
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            color="secondary"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            color="secondary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
            onClick={handleLogin}
            color="secondary"
          >
            Zaloguj{" "}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
            onClick={handleRegister}
            color="secondary"
          >
            Zarejestruj{" "}
          </Button>
          <Grid container>
            <Grid item xs>
              <TextField
                margin="normal"
                required
                fullWidth
                id="emailReset"
                label="Adres email"
                name="email"
                autoComplete="email"
                autoFocus
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                color="secondary"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                onClick={resetPassword}
                color="secondary"
              >
                Resetuj hasło{" "}
              </Button>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
