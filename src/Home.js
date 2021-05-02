import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, city, availability, book) {
  return { name, city, availability, book};
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxWidth: 550,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  var login = 0;
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState('1');
  const [dataconfig, setDataconfig] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const currencies = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
  ];
  const getConfig = async () => {
    try {
        console.log("*********")
  const userPosts = await axios.get("http://localhost:8080/login")
      console.log(userPosts.data);
      setDataconfig(userPosts.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(()=>{
    getConfig()
},[])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Availability</StyledTableCell>
            <StyledTableCell align="right">Book</StyledTableCell>
          </TableRow>
        </TableHead>
        {(dataconfig != null) ?
        <TableBody>
          {dataconfig.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.conference}
              </StyledTableCell>
              <StyledTableCell align="right">{row.city}</StyledTableCell>
              <StyledTableCell align="right">{row.availability}</StyledTableCell>
             { login===0?
              <StyledTableCell align="right"><Button variant="contained" onClick={handleClickOpen}color="primary" >Book Now!</Button></StyledTableCell>
              :
              <StyledTableCell align="right"><Link to="/Login"><Button variant="contained"  color="primary" >Book Now !</Button></Link></StyledTableCell>
             }
            </StyledTableRow>
          ))}
        </TableBody>: null}
      </Table>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book Your Slot</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Book the ticket for your conference and gain some experience.
          </DialogContentText>
          <TextField
          id="standard-select"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your count"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}







