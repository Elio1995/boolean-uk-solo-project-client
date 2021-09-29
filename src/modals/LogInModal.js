/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { APP_COLOR } from "../consistent";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStore from "../store";

function LogInModal() {
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
  const setModal = useStore((store) => store.setModal);
  // @ts-ignore
  const setLoginUser = useStore((state) => state.setLoginUser);
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;

    const newCredentials = {
      email: target.email.value,
      password: target.password.value,
    };
    setLoginUser(newCredentials);
  };

  const history = useHistory();

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
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
            value="Login"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => setModal("signUp")}>
                Not our member yet? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default LogInModal;
