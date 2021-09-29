/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { APP_COLOR } from "../consistent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStore from "../store";

function SignUpModal() {
  const useStyles = makeStyles((theme) => ({
    main: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    close: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: APP_COLOR.lightBlue,
      "&:hover": {
        backgroundColor: APP_COLOR.lightGrey,
      },
      borderRadius: theme.spacing(200),
      color: theme.palette.common.black,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: APP_COLOR.lightBlue,
      "&:hover": {
        backgroundColor: APP_COLOR.lightGrey,
      },
      color: theme.palette.common.black,
    },
  }));

  const classes = useStyles();
  // @ts-ignore
  const setModal = useStore((state) => state.setModal);
  // @ts-ignore
  const setSignupUser = useStore((state) => state.setSignupUser);
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;

    const newUser = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      username: target.username.value,
      email: target.email.value,
      password: target.password.value,
      city: target.password.value,
      street: target.street.value,
      phoneNumber: target.phoneNumber.value,
    };
    setSignupUser(newUser);
  };

  useEffect(() => {
    if (loggedInUser) setModal("");
  }, [loggedInUser]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.main}>
        <Grid container justifyContent="flex-end">
          <Button onClick={() => setModal("")} className={classes.close}>
            X
          </Button>
        </Grid>
        <Typography component="h1" variant="h5">
          Create New Account
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="city"
                id="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="street"
                label="Street"
                type="street"
                id="street"
                autoComplete="street"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="PhoneNumber"
                type="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => setModal("logIn")}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUpModal;
