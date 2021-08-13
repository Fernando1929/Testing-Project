
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { Container,Form,Col } from "react-bootstrap";
import { useState } from "react";
import {resourceHandler, waterHandler, medHandler, foodHandler, clothHandler, fuelHandler, } from "../Apis/Resources";

// const [rows, setRows] = useState([]);
var st = '';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories) {

  return { name, calories};
}

function Resources(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [errors, setErrors] = useState([]);
    const [rows, setRows] = useState([]);

    const onSubmit = async(e) => {
        e.preventDefault();
        if(st == 'water'){
           await waterHandler().then((res) => {
            if (res.status === 200) {
                //Just for now
              setRows(res.data.Water)
              let j = res.data.Water;
            } else {
                errors.push(res.data);
                setErrors(errors);
            }
            });
        }
        else if(st == 'food'){
          await foodHandler().then((res) => {
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
          await fuelHandler().then((res) => {
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
          await medHandler().then((res) => {
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
          await clothHandler().then((res) => {
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
          await resourceHandler().then((res) => {
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
        <div className="App">
           <label>State</label>
                <Form.Row style={{marginTop:"3rem"}}>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                        as="select"
                        defaultValue="From"
                        onChange={(e) => res(e) }
                    >
                        <option>Resources</option>
                        <option value="water">Water</option>
                        <option value="weapons">Weapons</option>
                        <option value="med">Medicine</option>
                        <option value="food">Food</option>
                        <option value="fuel">Fuel</option>
                        <option value="cloth">Cloth</option>
                    </Form.Control>
                    </Form.Group>
                    </Form.Row>
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


                    
{/*                     
            <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            return (
                            <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
                </Paper> */}
        </div>
    );
}
export default Resources;