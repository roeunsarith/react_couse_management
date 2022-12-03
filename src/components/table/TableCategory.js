import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 const TableCategory =(props)=>{
    return (
    <>
      <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">Parent&nbsp;(g)</TableCell>
                        <TableCell align="right">Image&nbsp;(g)</TableCell>
                        <TableCell align="right">Sort-Order&nbsp;(g)</TableCell>
                        <TableCell align="right">Status&nbsp;(g)</TableCell>
                        <TableCell align="right">Action&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.data.map((item,index) => (
                        <TableRow
                        key={item.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="right">{item.parent}</TableCell>
                        <TableCell align="right">{item.image}</TableCell>
                        <TableCell align="right">{item.sort_order}</TableCell>
                        <TableCell align="right">{item.status===1 ? <CheckCircleIcon color='success' /> : "Disable"}</TableCell>
                        <TableCell align="right">
                            <Button variant="contained" size="small">Edit</Button>
                            <Button variant="contained" size="small" style={{backgroundColor:"red"}} >DELETE</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </>
  );
    
}
export default TableCategory