import { makeStyles } from '@material-ui/core/styles';

export const textStyle = makeStyles((theme) => ({
  description: {
    marginTop: '30px',
    textAlign: "center",
    color: theme.palette.primary.main,
    fontSize: "large",
  },
}));
