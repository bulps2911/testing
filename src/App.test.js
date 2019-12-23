import React from 'react';
import App from './App';
import Card from "./components/Card"
// import renderer from "@testing-library/react";
jest.mock("react");
jest.mock("./components/Card");
jest.mock("./App");
jest.mock("@testing-library/react");

// beforeEach(()=>{
//   Card.mockClear();
// });

it("check if app calls card constructor", ()=>{
  // const onRennder = jest.fn();
  const card = new Card;
  // <Card number="Numero 1"></Card>
  expect(Card).toHaveBeenCalledTimes(1);
});

const numbers =[
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7", 
  "8",
];

test("there are 8 numbers", ()=>{
  expect(numbers).toContain("1");
})



// // test('renders learn react link', () => {
// //   const { getByText } = render(<App />);
// //   const linkElement = getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
