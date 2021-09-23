import useStore from "../store";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  close: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    borderRadius: theme.spacing(200),
    color: theme.palette.common.white,
  },
}));

export default function LoginErrorModal() {
  const classes = useStyles();

  // @ts-ignore
  const setModal = useStore((state) => state.setModal);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container justifyContent="flex-end">
        <Button onClick={() => setModal("")} className={classes.close}>
          X
        </Button>
      </Grid>
      <Typography component="h1" variant="h6">
        Username/Password incorrect
      </Typography>
      <Grid item>
        <Link onClick={() => setModal("logIn")}>Login Again</Link>
      </Grid>
      <Grid item>
        <Link onClick={() => setModal("signUp")}>
          Not our member yet? Sign Up
        </Link>
      </Grid>
    </Container>
  );
}
