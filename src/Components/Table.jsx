import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Navbar from "./Navbar";
import { height } from "dom-helpers";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import jsonDetails from '../dummyData/jsonDetails.json';


const rows = jsonDetails;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories) {

  return { name, calories};
}

export default function BasicTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // const [st, setST] = useState("");
    const [errors, setErrors] = useState([]);


    const onSubmit = async(e) => {
        e.preventDefault();
        if(st == 'water'){
           await waterHandler().then((res) => {
            console.log(res.data.Water);
            if (res.status === 200) {
                //Just for now
              
              rows = res.data.Water;
              console.log(rows);
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        else if(st == 'food'){
          foodHandler().then((res) => {
            console.log(res.data);
            if (res.status === 200) {
                //Just for now
              
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        else if(st == 'fuel'){
          fuelHandler().then((res) => {
            console.log(res.data);
            if (res.status === 200) {
                //Just for now
                props.history.push("/");
                window.location.reload(false);
                console.log("User logged in", res.data);
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        else if(st == 'med'){
          medHandler().then((res) => {
            console.log(res);
            if (res.status === 200) {
                //Just for now
                props.history.push("/");
                window.location.reload(false);
                console.log("User logged in", res.data);
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        else if(st == 'cloth'){
          clothHandler().then((res) => {
            console.log(res);
            if (res.status === 200) {
                //Just for now
                props.history.push("/");
                window.location.reload(false);
                console.log("User logged in", res.data);
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        else{
          resourceHandler().then((res) => {
            console.log(res);
            if (res.status === 200) {
                //Just for now
                props.history.push("/");
                window.location.reload(false);
                console.log("User logged in", res.data);
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        };
      
          function res(e){
          // setST(e.target.value);
          st=e.target.value
          onSubmit(e);
        }
      


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Resource Id</TableCell>
            <TableCell align="right">Resource Name</TableCell>
            <TableCell> Resource Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.resource_id}</TableCell>
              <TableCell align="right">{row.resource_name}</TableCell>
              <TableCell align="right">{row.resource_availability}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}