import { useState } from 'react'

import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button, ClickAwayListener} from '@mui/material'
import { addRequest } from '../service/api.js'
const Container= styled(FormGroup)
`
width:40%;
margin: 5% auto 0 auto ;
& > div
{
    margin-top:20px
}

`
const defaultValue={
    Amount:' ',
    Message:' ',
    Phone:' '
}

const AddRequest =()=>
{
    const[user, setUser] = useState(defaultValue);

const onValueChange=(f)=>
{
    //console.log(f.target.name,f.target.value)
    setUser({...user,[f.target.name]: f.target.value});
    //console.log(user);
}

const addRequestDetails= async ()=>
{
 await addRequest(user);
}
    return (
        <Container>
            <Typography variant="h4"> Request Credit</Typography>
            <FormControl>
                <InputLabel>Amount</InputLabel>
                <Input onChange={(f)=>onValueChange(f)} name ="Amount"/>
            </FormControl>
            <FormControl>
                <InputLabel>Message</InputLabel>
                <Input onChange={(f)=>onValueChange(f)} name ="Message"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(f)=>onValueChange(f)} name ="Phone"/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={()=>addRequestDetails()}>Send Request</Button>
            </FormControl>
        </Container>
 
    )
}

export default AddRequest;