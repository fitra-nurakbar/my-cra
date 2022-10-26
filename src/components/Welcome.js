import React, { Component } from "react";

const Welcome = () => {
  return <div>Welcome</div>;
};
export default Welcome;

export const Header = ({ title }) => {
  const val = title === undefined ? (title = null) : "nilai ada";

  console.log(val);

  return <h1>{title}</h1>;
};

export class ClassTest extends Component {
  render() {
    return <h2>Hello class components</h2>;
  }
}
