import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import locationGif from "../images/location.gif";
import searchGif from "../images/searchRide.gif";
import "../style.css";
import Col from 'react-bootstrap/Col';
import { data } from "./ImageProvider"
import Form from 'react-bootstrap/Form';
import cashGif from "../images/cash.gif"
import acImage from "../images/ac.png";
import carImage from "../images/carr.png";
import bikeImage from "../images/bikee.png";
import courierImage from "../images/courier.png";
import freightImage from "../images/freightt.png";
import fareGif from "../images/fare.gif";






const location1 = ({
  city: " ",
  countryName: " ",
  latitiude: " ",
  longitude: " "
});



const PassengerMode = () => {

  const [fareReq, setReq] = useState({
    userN: "",
    dest: "", 
    dist: "", 
    rideT: "", 
    currLoc: ""
  })


  const [bookedRideInfo, setBookRide] =useState({
    name: "",
    currentLocation: "",
    rideType: "",
    destination: "",
    distance: "",
    fare:"",
    travelTime:""

  })



  const [location1, setLocation] = useState(null);
  const [rideCard, showCard] = useState(false);
  const [courierInfo, showCourierInfo] = useState(false);
  const [farecard, showFareCard] = useState(false);


  const getUserLocation = () => {

    fetch("https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1")
      .then(response => response.json())
      .then(data => setLocation(data));

    // getRideInfo();

    console.log("hbkjn");
    //console.log(`${location1.countryName}`);
  }

 

  

  let name, value;
  const handleFareReqInfo = (e) => {
    console.log(e.target.name);
    name = e.target.name;
    value = e.target.value;

    const locationSave = ` ${location1.city}, ${location1.countryName}, ${location1.longitude}, ${location1.latitiude}`;

    fareReq.currLoc = locationSave;
    fareReq.rideT = e.currentTarget.id;
    setReq({ ...fareReq, [name]: value });
    //console.log(setReq.rideT);
    //  // name=e.targ
    

  }

 var faree;
  //const[faree,setFare]=useState(null);
  //const[travelTimee,setTime]=useState(null);
  let travelTimee;

  const setFareDetails = () => {

    var distance = fareReq.dist;
    var distanceFound = distance.replace(/\D/g, '');

    var fareV = distanceFound * 100;
    //console.log(fareV);
   // faree=distanceFound * 100;
   //faree=fareV;
   //setFare(fareV);
    faree = `PKR ${fareV}`;
    console.log(faree);

    var time = distanceFound * 1
    //setTime(time);
    travelTimee = `${time} Hrs`;
    console.log(travelTimee);

  }


  const bookRide=()=>{

    bookedRideInfo.currentLocation=fareReq.currLoc;
    bookedRideInfo.destination=fareReq.dest;
    bookedRideInfo.distance=fareReq.dist;
    bookedRideInfo.rideType=fareReq.rideT;
    bookedRideInfo.name=fareReq.userN;
    bookedRideInfo.fare=faree;
    bookedRideInfo.travelTime=travelTimee;

    Axios.post("http://localhost:3001/api/bookedRideR/", bookedRideInfo).then((response)=>{alert("RIDE HAS BEEN BOOKED SUCCESSFULLY")})
  }
  

  const getRideInfo = () => {


    {/* <div>
         <Container>
        <Row classname=" row justify-content-right ">
          <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={locationGif} />
            <Card.Body>
              <Card.Title className="text-center">Ride Info</Card.Title>
              <Card.Text className="text-center">
                Click on the Button below to get your current location
              </Card.Text>
              <div className="text-center">
                <Button variant="outline-primary" size='lg'>Get Fare</Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      </div> */}
    //)

  }



  return (
    <>

      
      <div data-testid="loct">
      <h1 class="text-center">BOOK YOUR RIDE</h1>
      <Container>
        <Row classname="row justify-content-center mt-3 ">
          <Card style={{ width: '1300px', height: '500px' }}>
            <div className="text-center">
              <Card.Img style={{ height: '300px', width: '500px' }} variant="top" src={locationGif} />

            </div>
            <Card.Body>
              <Card.Title className="text-center">Current Location</Card.Title>
              <Card.Text className="text-center">
                Click on the Button below to get your current location
              </Card.Text>
              <div className="text-center">
                <Button variant="outline-primary" size='lg' onClick={getUserLocation}>Get Location</Button>
              </div>
              <div className="text-center">
                {location1 && (
                  <div>
                    <Card.Subtitle class="pt-3" data-testid="caughtLocation">
                      Your Location: {` ${location1.city}, ${location1.countryName}, ${location1.longitude}, ${location1.latitiude}`}
                    </Card.Subtitle>


                  </div>

                )}

              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      </div>
      <div className="text-center pt-3 pb-3">
        <Button variant="outline-primary" size='lg' onClick={() => showCard(!rideCard)}>Enter Ride Info</Button>
      </div>

      <div>
        {
          rideCard && (
            <div data-testid="rideInfoDiv">
              <Container>
                <Row classname="position-absolute top-0 end-0 ">

                  <Card style={{ width: '1300px' }}>
                    <Card.Body>
                      <Row>
                        <Col sm={4}>
                          <Row className="justify-content-md-center">
                            <div >
                              <Card.Img style={{ height: '450px', width: '500px' }} variant="top" src={searchGif} />

                            </div>
                          </Row>
                        </Col>
                        <Col>

                          <Card.Title className="text-center" data-testid="rideHeading1">Search Your Ride</Card.Title>
                          <Form>
                            <Form.Group as={Row} className="mb-3" controlId="userN">
                              <Form.Label column sm={2}>
                                User Name
                              </Form.Label>
                              <Col sm={10}>
                                <Form.Control
                                  name="userN"
                                  value={fareReq.userN}
                                  onChange={handleFareReqInfo}
                                  placeholder="enter Name" />
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="dest">
                              <Form.Label column sm={2}>
                                Destination
                              </Form.Label>
                              <Col sm={10}>
                                <Form.Control
                                  name="dest"
                                  value={fareReq.dest}
                                  onChange={handleFareReqInfo}
                                  placeholder="City,Country" />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="dist">
                              <Form.Label column sm={2}>
                                Distance
                              </Form.Label>
                              <Col sm={10}>
                                <Form.Control
                                  name="dist"
                                  value={fareReq.dist}
                                  onChange={handleFareReqInfo}
                                  placeholder="10 km" />
                              </Col>


                            </Form.Group>
                            <Card.Body className="text-center" data-testid="rideHeading2">Select your ride type from below options</Card.Body>

                            <div className="justify-content-md-center">
                              <Row xs="auto" className="justify-content-md-center">
                                <Col className="mr-3">
                                  <Row>
                                    <Button size="lg" variant="outline-dark" id="acRide" onClick={handleFareReqInfo}>
                                      <img src={acImage} alt="add item" width="90" height="70" />
                                    </Button>
                                  </Row>
                                  <Row className="justify-content-md-center">Ac Ride</Row>
                                </Col>

                                <Col className="mr-3">
                                  <Row>
                                    <Button size="lg" variant="outline-dark" id="carRide">
                                      <img src={carImage} alt="add item" width="90" height="70" />
                                    </Button>
                                  </Row>
                                  <Row className="justify-content-md-center">Car Ride</Row>
                                </Col>

                                <Col className="mr-3">
                                  <Row>
                                    <Button size="lg" variant="outline-dark" id="bikeRide">
                                      <img src={bikeImage} alt="add item" width="90" height="70" />
                                    </Button>
                                  </Row>
                                  <Row className="justify-content-md-center">Bike Ride</Row>
                                </Col>

                                <Col className="mr-3">
                                  <Row>
                                    <Button size="lg" variant="outline-dark" id="courierRide" onClick={() => showCourierInfo(!courierInfo)}>
                                      <img src={courierImage} alt="add item" width="90" height="70" />
                                    </Button>
                                  </Row>
                                  <Row className="justify-content-md-center">Courier</Row>
                                </Col>

                                <Col className="mr-3">
                                  <Row>
                                    <Button size="lg" variant="outline-dark" id="freightRide" onClick={() => showCourierInfo(!courierInfo)}>
                                      <img src={freightImage} alt="add item" width="90" height="70" />
                                    </Button>
                                  </Row>
                                  <Row className="justify-content-md-center">Freight</Row>
                                </Col>



                              </Row>

                            </div>
                            {/* <fieldset>
                              <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                  Ride Types
                                </Form.Label>
                                <Col sm={10}>
                                  <Form.Check
                                    type="radio"
                                    label="Ac Car"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                  />
                                  <Form.Check
                                    type="radio"
                                    label="Car"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                  />
                                  <Form.Check
                                    type="radio"
                                    label="Bike"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                  />
                                  <Form.Check
                                    type="radio"
                                    label="Courier"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                  />
                                  <Form.Check
                                    type="radio"
                                    label="Freight"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                  />
                                </Col>
                              </Form.Group>
                            </fieldset> */}

                          </Form>

                          {/* <div className="relative flex items-center">
                           
                            {
                              data.map((item) => (
                                <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt="myimage" ></img>
                                // console.log(item.id)
                                // <li>{item.id}</li>


                              ))
                            }

                            

                          </div>  */}
                          {
                            courierInfo && (

                              <div>
                                <Card.Body>
                                  <Form.Group as={Row} className="mb-3" controlId="courierComments">
                                    <Form.Label column sm={2}>
                                      Goods Info
                                    </Form.Label>
                                    <Col sm={10}>
                                      <Form.Control
                                        //name="dist" 
                                        //value={rideInfo.Distance}
                                        //onChange={handleRideInfo}
                                        placeholder="Food,lugage,furniture etc" />
                                    </Col>
                                  </Form.Group>
                                </Card.Body>

                              </div>
                            )
                          }




                          <Card.Body className="text-center" data-testid="rideHeading3" >
                            Click on the Button below to get information about your ride
                          </Card.Body>
                          <div className="text-center">
                            <Button variant="outline-primary" size='lg' onClick={ ()=>{ showFareCard(!farecard);setFareDetails();} } >Get Fare</Button>
                          </div>


                        </Col>
                      </Row>
                    </Card.Body>


                  </Card>
                </Row>
              </Container>
            </div>
          )
        }
      </div>
<h1>{faree}</h1>
      <div className="pt-3">
        {
          farecard && (
            <div data-testid="fareDiv">
              <Container>
                <Row classname=" row justify-content-right ">
                  <Card style={{  width: '1300px', height: '550px' }}>
                    <Card.Img style={{height:'350px'}} variant="top" src={fareGif} />
                    <Card.Body>
                      <Card.Title className="text-center" data-testid="fareHeading">Ride Info</Card.Title>
                      <Card.Text className="text-center" data-testid="fare">
                        Your total fare will be: {` ${faree}`}
                      </Card.Text>
                      <Card.Text className="text-center" data-testid="travelTime">
                        Your total travel time will be:{` ${travelTimee}`}
                      </Card.Text>
                      
                      <div className="text-center">
                        <Button variant="outline-primary" size='lg' onClick={bookRide}>Book Ride</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>

            </div>
          )
        }
      </div>

    </>
  )
}

export default PassengerMode;