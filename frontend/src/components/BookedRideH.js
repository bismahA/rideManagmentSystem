import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import  Axios  from "axios";


const BookedRideH = () => {

    const [rideHistory, setRideHistory] = useState([])
    const userName="saad";

    // useEffect(async()=>{
    //     Axios.get("http://localhost:3001/api/bookedRideR/", userName).then((response)=>{
    //         setRideHistory(response.data)
    //        // console.log(Response.data);
    //     })
    // },[]);

    return (
        <div>
              {/* {rideHistory.map((ride) => {
                
                return (
                    <div>  */}
                         <Row className="justify-content-md-center pt-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>{userName}</Card.Header>
                                <ListGroup variant="flush">
                                    
                                    <ListGroup.Item>From: {rideHistory.currentLocation}</ListGroup.Item>
                                    <ListGroup.Item>To: {rideHistory.destination}</ListGroup.Item>
                                    <ListGroup.Item>Fare: {rideHistory.fare}</ListGroup.Item>
                                    <ListGroup.Item>Date: {rideHistory.createdAt}</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card>

                        </Row> 

                     </div> 
        //          )
        //     })}  



        // </div>
    )
}

export default BookedRideH;