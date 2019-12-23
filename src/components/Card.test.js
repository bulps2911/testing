import React from "react";
import { Card } from "./Card.js";
import { mount, render } from "enzyme";
import renderer from "react-test-renderer";
// import renderer from "@testing-library/react";
// import TestRenderer from "react-test-renderer";

jest.mock("react");
jest.mock("./Card.js");
// jest.mock("@testing-library/react");
jest.mock("react-test-renderer");

// // test('renders learn react link', () => {
// //   const { getByText } = render(<App />);
// //   const linkElement = getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

test("renders cards", ()=>{
const {Card} = render(<Card number ="1"/>);
const cardElement = Card(/1/);
expect(cardElement).toBeInTheDocument();
});;


// describe("card component renders card correctly", ()=>{
//   it("renders correctly", ()=>{
//     const number = "1";
//     const rendered = renderer.create(
//       <Card number={number}/>
//     );
//     expect(rendered.toJSON()).toMatchSnapshot();
//   });
// });


// test("card renders the text from api", () => {
//   let number = "1";
  
//   let component = mount(<Card number={number}/>);
//   // give css selector here
//   const p = component.find(".Card");
//   expect(p.text()).toBe("1");
// });

// it("card renders correctly", () => {
//   // const tree = renderer
//   // .create(<Card content="number"/>)
//   // .toJSON();
//   // expect(tree).toMatchSnapshot();
//   const testRenderer = TestRenderer.create(<Card number="1" />);
//   console.log(testRenderer);
//   console.log(testRenderer.toJSON());
// });
