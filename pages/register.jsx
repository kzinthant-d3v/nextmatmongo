import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    height: 430,
    width: 440,
    margin: "0 auto",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
  },
  input: {
    width: 400,
    marginTop: 30,
  },
}));
const Register = () => {
  const classes = useStyles();
  return (
    <>
      <br />
      <br />
      <Grid container>
        <Paper elevation={8} className={classes.paper} component="div">
          <Typography variant="h6" component="h6">
            Register Now!
          </Typography>
          <TextField
            className={classes.input}
            label="Username"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="outlined"
            type="password"
          />
          <br />
          <br />
          <br />

          <Button variant="contained" color="secondary">
            Register
          </Button>
        </Paper>
      </Grid>
    </>
  );
};
export default Register;
