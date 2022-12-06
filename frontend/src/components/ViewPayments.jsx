
import { useEffect, useState } from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material';


import { getRequestLog } from '../service/api.js';

const StyledTable = styled(Table)
`
margin: 50px auto 0 auto;
width:80%;
`


const TableR = styled(TableRow)
`
background: #83DB40
`


const RequestLog = () => {

 const [users, setUsers]= useState([]);

    useEffect(() => {
        Log ();
    }, []);
    
   

    const Log = async () =>
    {
     let response = await getRequestLog();
     setUsers(response.data);
    
    }

    return (
        <StyledTable>
            <TableHead>
                <TableR>
                    <TableCell>ID</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Contact</TableCell>

                </TableR>

            </TableHead>
            <TableBody>
               {
                users.map(user=>(
                    <TableRow>
                        <TableCell>{user._id} </TableCell>
                        <TableCell>{user.Amount} </TableCell>
                        <TableCell>{user.Message} </TableCell>
                        <TableCell>{user.Phone} </TableCell>
                    </TableRow>
                ))
               }
            </TableBody>
        </StyledTable>
    )
}

export default RequestLog;