import React from 'react';
import Nav from "./Navabr";


class Prop extends React.Component {
  state = {
    name: "Reddy",
    age: 24,
    village: 'CHANDUR'
  };
    

  render() {
     
const myName = {
  color: 'red',
  backgroundColor: 'yelow'
}
    return (
      <>
        <h4 style={myName}>
          ssshddddd name: {this.state.name} age: {this.state.age} village: {this.state.village}
        </h4>
        {/* <buttton onClick={showText}>click</buttton> */}
      </>
    );
  }
}
export default Prop
