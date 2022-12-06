import { render, screen , fireEvent} from '@testing-library/react';
import PassengerMode from '../PassengerMode';
import '@testing-library/jest-dom';

//Test case 1
test('is the location div rendering', () => {
  render(<PassengerMode />);
  const linkElement = screen.getByTestId("loct");
  expect(linkElement).toBeInTheDocument();
});

//Test case 2
test('is the main heading printed', () => {
  render(<PassengerMode />);
  const linkElement = screen.getByTestId("loct");
  expect(linkElement).toBeInTheDocument("BOOK YOUR RIDE");
});

//test case 3
test("whether the location is caught after clicking button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const loctButton=getByRole("button",{name:"Get Location"});
  fireEvent.click(loctButton);
  const location=getByTestId("caughtLocation").textContent;
  expect(location).toEqual("islamabad,undefined,70.081,undefined");
})

//test case 4
test("is ride info div rendering after clicking the ride info button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const rideButton=getByRole("button",{name:"Enter Ride Info"});
  fireEvent.click(rideButton);
  const linkElement = screen.getByTestId("rideInfoDiv");
  expect(linkElement).toBeInTheDocument();
})

//test case 5
test("is ride info heading 1 pritning in div after clicking the button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const rideButton=getByRole("button",{name:"Enter Ride Info"});
  fireEvent.click(rideButton);
  const heading1=getByTestId("rideHeading1").textContent;
  expect(heading1).toEqual("Search Your Ride");
})

//test case 6
test("is ride info heading 2 pritning in div after clicking the button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const rideButton=getByRole("button",{name:"Enter Ride Info"});
  fireEvent.click(rideButton);
  const heading2=getByTestId("rideHeading2").textContent;
  expect(heading2).toEqual("Select your ride type from below options");
})

//test case 7
test("is ride info heading 3 pritning in div after clicking the button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const rideButton=getByRole("button",{name:"Enter Ride Info"});
  fireEvent.click(rideButton);
  const heading3=getByTestId("rideHeading3").textContent;
  expect(heading3).toEqual(" Click on the Button below to get information about your ride");
})

//test case 8
test("is fare div rendering after clicking the get fare button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const fareButton=getByRole("button",{name:"Get Fare"});
  fireEvent.click(fareButton);
  const linkElement = screen.getByTestId("fareDiv");
  expect(linkElement).toBeInTheDocument();
})

//test case 9
test("is fare info heading pritning in div after clicking the button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const fareButton=getByRole("button",{name:"Get Fare"});
  fireEvent.click(fareButton);
  const heading=getByTestId("fareHeading").textContent;
  expect(heading).toEqual("Ride Info");
})

//test case 10
test("checking value of fare after clicking the button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const fareButton=getByRole("button",{name:"Get Fare"});
  fireEvent.click(fareButton);
  const fare=getByTestId("fare").textContent;
  expect(fare).toEqual(500);
})

//test case 11
test("checking value of travel time after clicking the button",()=>{
  const {getByTestId, getByRole}=render(<PassengerMode />);
  const fareButton=getByRole("button",{name:"Get Fare"});
  fireEvent.click(fareButton);
  const time=getByTestId("travelTime").textContent;
  expect(time).toEqual(10);
})

//test case 12
it('should render a locatin button with the class of primary', () => {
  render(<PassengerMode />)
  const loctButton = screen.getByRole('button', { name:"Get Location" })
  expect(loctButton).toHaveClass('outline-primary')
})

//test case 13
it('should render a ride info button with the class of primary', () => {
  render(<PassengerMode />)
  const rideButton = screen.getByRole('button', { name:"Enter Ride Info" })
  expect(rideButton).toHaveClass('outline-primary')
})

//test case 14
it('should render a fare button with the class of primary', () => {
  render(<PassengerMode />)
  const fareButton = screen.getByRole('button', { name:"Get Fare" })
  expect(fareButton).toHaveClass('outline-primary')
})

//test case 15
it('should render a book ride button with the class of primary', () => {
  render(<PassengerMode />)
  const bookButton = screen.getByRole('button', { name:"Book Ride" })
  expect(bookButton).toHaveClass('outline-primary')
})










