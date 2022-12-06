//import React from 'react'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../style.css";
//import { useEffect } from "react"
//export const Home = () => {
 // return (
 //   <div>This is Home</div>
 // )
//}
//export default Home j
const Requests1 = props => {
    console.log(props.request.name);
    return(
    <tr data-testid="tr1">
        <th>{props.request.name }</th>
        <th>{props.request.phoneNumber}</th>
        <th>{props.request.currentLoction}</th>
        <th>{props.request.rideType}</th>
        <th>{props.request.destination}</th>
        <th>{props.request.distance}</th>
        <th>{props.request.fare}</th>
        <td>{props.request.travelTime}</td>
        <td><Link to={"/specific-request.component/"+props.request._id}>edit</Link> | <button onClick={() => { props.CheckRequest(props.request._id) }}>remove</button>|<button>Accept Ride</button></td>
        
    </tr>
    )
}


export default class Home extends Component {
    

    
    
    
    constructor(props)
    {
        super(props);
        this.CheckRequest = this.CheckRequest.bind(this)
        this.AcceptRequest=this.AcceptRequest.bind(this)
        this.state={
            name:'',
            phoneNumber:'',
            currentLocation:'',
            rideType:'',
            destination:'',
            distance:'',
            fare:'',
            travelTime:'',
            requests: []};
            
        
    }
    componentDidMount()
    {
        axios.get("http://localhost:3001/getUsers").then(response => {
            this.setState({requests: response.data})
            console.log(response.data);
        })
        .catch(
            (error) => { console.get(error);}    //console.group actual
        )
        
        
    }
    CheckRequest(id)
    {
        axios.get("http://localhost:3001/getUsers/"+id)
        .then(response => console.log("!!!!!"+response.data));

        this.setState({requests: this.state.requests.filter(el => el._id !== id )})
    }
    AcceptRequest(id)
    {    
        console.log(id);
        axios.get("http://localhost:3001/getUsers/"+id).then(response => {
            this.setState({
                name:response.data.name,
                phoneNumber:response.data.phoneNumber,
                currentLocation:response.data.currentLocation,
                rideType:response.data.rideType,
                destination:response.data.destination,
                distance:response.data.dsitance,
                fare:response.data.fare,
                travelTime:response.data.travelTime
            })
            const excersie={
                name:this.state.name,
                phoneNumber:this.state.phoneNumber,
                currentLocation:this.state.currentLocation,
                rideType:this.state.rideType,
                destination:this.state.destination,
                distance:this.state.distance,
                fare:this.state.fare,
                travelTime:this.state.travelTime
            }
        axios.post("http://localhost:3001/store/"+id,excersie).then(response => console.log(response.data));
           

        })
        
        
    // const selected={
    // name:this.state.name,
    // phoneNumber:this.state.phoneNumber,
    // currentLocation:this.state.currentLocation,
    // rideType:this.state.rideType,
    // destination:this.state.destination,
    // distance:this.state.distance,
    // travelTime:this.state.travelTime
     //}
     //console.log("################"+this.state.name);
     //axios.post("http://localhost:3001/storeUser/"+id,selected)
     //.then(response => console.log("$$$$$$$$$$$$$$$$$"+response.data));

    }
    requests()
    {   console.log("-----------------"+this.state.requests);
        return this.state.requests.map( currentlist =>
            {
                return <Requests1 request={currentlist} CheckRequest={this.CheckRequest} AcceptRequest={this.AcceptRequest} key={currentlist._id} />
                 //return(
                 //   <h1>hello</h1> io op
                // )
            }

        )
    }
    render()
    {
        return (
            <div data-testid="div1">
                <p data-testid="p1"> You are on list</p>
                <h3 data-testid="h31">All Requests</h3>
                <table className="table">
                <thead className="thead-light">
                <tr>
                    <tr>
                        <th data-testid="th1">Name</th>
                        <th data-testid="th2">Phone number  </th>
                        <th data-testid="th3">Current location  </th>
                        <th data-testid="th4">Ride type  </th>
                        <th data-testid='th5'>Destination  </th>
                        <th data-testid="th6">Distance  </th>
                        <th data-testid="th7">Fare  </th>
                        <th data-testid="th8">Travel Time  </th>
                    </tr>
                </tr>
                </thead>
                <tbody>
                    { this.requests() }
                </tbody>
                </table>
            </div>
        )
    }
}
